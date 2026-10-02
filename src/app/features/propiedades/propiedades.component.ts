import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { PROPERTIES_FOR_SALE, SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-propiedades',
  imports: [],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.casasParcel);
  protected readonly fichasCopy = computed(() => SITE_COPY[this.i18nService.locale()].sections.fichas);
  protected readonly properties = PROPERTIES_FOR_SALE;
  protected readonly isEmpty = computed(() => PROPERTIES_FOR_SALE.length === 0);
}
