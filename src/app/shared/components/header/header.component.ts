import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { I18nService, Locale } from '../../../core/i18n.service';
import { SITE_COPY, SiteCopy } from '../../../core/site-content';

type NavKey = keyof SiteCopy['nav'];

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly locale = this.i18n.locale;
  protected readonly copy = computed(() => SITE_COPY[this.i18n.locale()]);
  protected readonly menuOpen = signal(false);

  constructor() {
    this.i18n.setLocale('gl');
  }

  protected readonly languages: Array<{ code: Locale; label: string }> = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'gl', label: 'GL' },
    { code: 'ca', label: 'CA' },
    { code: 'fr', label: 'FR' }
  ];

  protected readonly navLinks: Array<{ path: string; key: NavKey; exact?: boolean }> = [
    { path: '/', key: 'home', exact: true },
    { path: '/plano-director', key: 'planoDirector' },
    { path: '/imaxes', key: 'imaxes' },
    { path: '/planos-urbanisticos', key: 'planosUrban' },
    { path: '/propiedades', key: 'casasParcel' },
    { path: '/gallery', key: 'gallery' }
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onLocaleChange(localeValue: string): void {
    if (localeValue === 'en' || localeValue === 'es' || localeValue === 'gl' || localeValue === 'ca' || localeValue === 'fr') {
      this.i18n.setLocale(localeValue);
    }
  }
}
