import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY } from '../../core/site-content';
import { AvailabilityService } from '../../core/services/availability.service';

function dateOrderValidator(value: { checkIn: string; checkOut: string }): ValidationErrors | null {
  if (!value.checkIn || !value.checkOut) {
    return null;
  }

  return value.checkOut > value.checkIn ? null : { invalidDates: true };
}

@Component({
  selector: 'app-availability',
  imports: [ReactiveFormsModule],
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css'
})
export class AvailabilityComponent {
  private readonly i18n = inject(I18nService);
  private readonly fb = inject(FormBuilder);
  private readonly availabilityService = inject(AvailabilityService);

  protected readonly locale = this.i18n.locale;
  protected readonly copy = computed(() => SITE_COPY[this.i18n.locale()].availability);
  protected readonly isSending = signal(false);
  protected readonly successMessage = signal('');

  protected readonly form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guests: [2, [Validators.required, Validators.min(1), Validators.max(8)]],
      notes: [''],
      preferredLanguage: [this.i18n.locale(), Validators.required]
    },
    {
      validators: (group) => dateOrderValidator(group.getRawValue())
    }
  );

  constructor() {
    effect(() => {
      this.form.controls.preferredLanguage.setValue(this.i18n.locale(), {
        emitEvent: false
      });
    });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSending.set(true);
    this.successMessage.set('');

    this.availabilityService.submitRequest(this.form.getRawValue()).subscribe({
      next: ({ reference }) => {
        const success = `${this.copy().success} (${reference})`;

        this.successMessage.set(success);
        this.form.reset({
          name: '',
          email: '',
          checkIn: '',
          checkOut: '',
          guests: 2,
          notes: '',
          preferredLanguage: this.i18n.locale()
        });
        this.isSending.set(false);
      },
      error: () => {
        this.isSending.set(false);
      }
    });
  }

  protected showRequired(name: 'name' | 'email' | 'checkIn' | 'checkOut'): boolean {
    const control = this.form.controls[name];
    return control.touched && control.hasError('required');
  }
}
