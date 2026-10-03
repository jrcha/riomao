import { Component, computed, inject, signal } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { CADASTRAL_PLAN_ASSET, SITE_COPY } from '../../core/site-content';

const PLAN_DOCUMENTS = {
  analysis: [
    'ANALISIS GENERAL DIC 09 00.pdf',
    'ANALISIS GENERAL DIC 09 01.pdf',
    'ANALISIS GENERAL DIC 09 02.pdf',
    'ANALISIS GENERAL DIC 09 03.pdf',
    'ANALISIS GENERAL DIC 09 04.pdf',
    'ANALISIS GENERAL DIC 09 05.pdf',
    'ANALISIS GENERAL DIC 09 06.pdf',
    'ANALISIS GENERAL DIC 09 07.pdf',
    'ANALISIS GENERAL DIC 09 08.pdf',
    'ANALISIS GENERAL DIC 09 09.pdf',
    'ANALISIS GENERAL DIC 09 10.pdf'
  ],
  interventions: [
    'INTERVENCIONES CONCRETAS DIC09 11.pdf',
    'INTERVENCIONES CONCRETAS DIC09 12.pdf',
    'INTERVENCIONES CONCRETAS DIC09 13.pdf',
    'INTERVENCIONES CONCRETAS DIC09 14.pdf'
  ],
  overall: ['RIOMAO_XERAL.pdf']
};

@Component({
  selector: 'app-planos-urbanisticos',
  imports: [],
  templateUrl: './planos-urbanisticos.component.html',
  styleUrl: './planos-urbanisticos.component.css'
})
export class PlanosUrbanisticosComponent {
  private readonly i18nService = inject(I18nService);
  protected readonly copy = computed(() => SITE_COPY[this.i18nService.locale()].sections.planosUrbanisticos);
  protected readonly locale = this.i18nService.locale;
  protected readonly asset = CADASTRAL_PLAN_ASSET;
  protected readonly planDocuments = PLAN_DOCUMENTS;
  protected readonly imageAvailable = signal(true);

  protected documentUrl(fileName: string): string {
    return `planos/${encodeURIComponent(fileName)}`;
  }

  protected onImageError(): void {
    this.imageAvailable.set(false);
  }
}
