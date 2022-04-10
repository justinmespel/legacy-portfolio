import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'develop', component: GalleryComponent
	},
	{
		path: 'design', component: GalleryComponent
	},
	{
		path: 'about', component: AboutComponent
	},
	{
		path: '**', redirectTo: '/'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
