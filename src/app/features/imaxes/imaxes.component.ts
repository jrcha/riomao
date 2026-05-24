import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY, GALLERY_ITEMS } from '../../core/site-content';

@Component({
  selector: 'app-imaxes',
  imports: [],
  templateUrl: './imaxes.component.html',
  styleUrl: './imaxes.component.css'
})
export class ImaxesComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly i18n = this.i18nService;
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.imaxes);
  protected readonly galleryItems = GALLERY_ITEMS;
}
