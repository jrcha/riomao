import { Routes } from '@angular/router';

import { GalleryComponent } from './features/gallery/gallery.component';
import { FichasComponent } from './features/fichas/fichas.component';
import { HomeComponent } from './features/home/home.component';
import { ImaxesComponent } from './features/imaxes/imaxes.component';
import { ContornaForestalComponent } from './features/contorna-forestal/contorna-forestal.component';
import { MemoriaComponent } from './features/memoria/memoria.component';
import { PlanosUrbanisticosComponent } from './features/planos-urbanisticos/planos-urbanisticos.component';
import { PropiedadesComponent } from './features/propiedades/propiedades.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'plano-director', redirectTo: 'memoria', pathMatch: 'full' },
	{ path: 'fichas', component: FichasComponent },
	{ path: 'imaxes', component: ImaxesComponent },
	{ path: 'memoria', component: MemoriaComponent },
	{ path: 'contorna-forestal', component: ContornaForestalComponent },
	{ path: 'planos-urbanisticos', component: PlanosUrbanisticosComponent },
	{ path: 'propiedades', component: PropiedadesComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: '**', redirectTo: '' }
];
