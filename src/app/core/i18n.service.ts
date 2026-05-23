import { Injectable, signal } from '@angular/core';

export type Locale = 'en' | 'es' | 'gl' | 'ca' | 'fr';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly localeSignal = signal<Locale>('gl');

  readonly locale = this.localeSignal.asReadonly();

  setLocale(locale: Locale): void {
    this.localeSignal.set(locale);
  }
}
