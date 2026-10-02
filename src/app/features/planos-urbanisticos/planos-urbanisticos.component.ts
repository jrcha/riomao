import { Component, computed, inject, signal } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { CADASTRAL_PLAN_ASSET, SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-planos-urbanisticos',
  imports: [],
  templateUrl: './planos-urbanisticos.component.html',
  styleUrl: './planos-urbanisticos.component.css'
})
export class PlanosUrbanisticosComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.planosUrbanisticos);
  protected readonly locale = this.i18nService.locale;
  protected readonly asset = CADASTRAL_PLAN_ASSET;
  protected readonly imageAvailable = signal(true);

  protected onImageError(): void {
    this.imageAvailable.set(false);
  }
}
