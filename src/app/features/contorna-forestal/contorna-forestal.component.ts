import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-contorna-forestal',
  templateUrl: './contorna-forestal.component.html',
  styleUrl: './contorna-forestal.component.css'
})
export class ContornaForestalComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.contornaForestal);
}