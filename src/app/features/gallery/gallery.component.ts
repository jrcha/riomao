import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { GALLERY_ITEMS, SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  private readonly i18n = inject(I18nService);

  protected readonly locale = this.i18n.locale;
  protected readonly copy = computed(() => SITE_COPY[this.i18n.locale()].gallery);
  protected readonly images = GALLERY_ITEMS;

  private readonly placeholder =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d8cfbe"/><stop offset="1" stop-color="#c5b49b"/></linearGradient></defs><rect fill="url(#g)" width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#655b4c" font-size="38" font-family="sans-serif">Add local image</text></svg>'
    );

  protected onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = this.placeholder;
  }
}
