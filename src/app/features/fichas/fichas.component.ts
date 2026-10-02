import { Component, computed, inject, signal } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { BUILDING_RECORDS, SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-fichas',
  imports: [],
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css'
})
export class FichasComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.fichas);
  protected readonly query = signal('');
  protected readonly records = computed(() => {
    const q = this.query().trim().toUpperCase();
    return q ? BUILDING_RECORDS.filter((record) => record.code.includes(q)) : BUILDING_RECORDS;
  });

  protected onQuery(value: string): void {
    this.query.set(value);
  }
}
