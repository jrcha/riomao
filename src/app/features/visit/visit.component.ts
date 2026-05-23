import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-visit',
  imports: [],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.css'
})
export class VisitComponent {
  private readonly i18n = inject(I18nService);

  protected readonly copy = computed(() => SITE_COPY[this.i18n.locale()].visit);
}
