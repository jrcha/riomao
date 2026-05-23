import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../../core/i18n.service';
import { SITE_COPY } from '../../../core/site-content';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);

  protected readonly copy = computed(() => SITE_COPY[this.i18n.locale()].footer);
  protected readonly year = new Date().getFullYear();
}
