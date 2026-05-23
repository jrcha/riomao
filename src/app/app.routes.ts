import { Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { AvailabilityComponent } from './features/availability/availability.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { HomeComponent } from './features/home/home.component';
import { VideoComponent } from './features/video/video.component';
import { VisitComponent } from './features/visit/visit.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'video', component: VideoComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'visit', component: VisitComponent },
	{ path: 'availability', component: AvailabilityComponent },
	{ path: '**', redirectTo: '' }
];
