import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-plano-director',
  imports: [],
  templateUrl: './plano-director.component.html',
  styleUrl: './plano-director.component.css'
})
export class PlanoDirectorComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.planoDirector);
}
