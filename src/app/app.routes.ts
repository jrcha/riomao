import { Routes } from '@angular/router';

import { GalleryComponent } from './features/gallery/gallery.component';
import { HomeComponent } from './features/home/home.component';
import { ImaxesComponent } from './features/imaxes/imaxes.component';
import { PlanoDirectorComponent } from './features/plano-director/plano-director.component';
import { PlanosUrbanisticosComponent } from './features/planos-urbanisticos/planos-urbanisticos.component';
import { PropiedadesComponent } from './features/propiedades/propiedades.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'plano-director', component: PlanoDirectorComponent },
	{ path: 'imaxes', component: ImaxesComponent },
	{ path: 'planos-urbanisticos', component: PlanosUrbanisticosComponent },
	{ path: 'propiedades', component: PropiedadesComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: '**', redirectTo: '' }
];
