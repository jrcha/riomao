import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n.service';
import { SITE_COPY } from '../../core/site-content';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].home);
}
