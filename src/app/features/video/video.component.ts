import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  private readonly i18n = inject(I18nService);

  protected readonly copy = computed(() => SITE_COPY[this.i18n.locale()].video);
}
