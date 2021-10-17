import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { WipComponent } from './components/wip/wip.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'develop', component: GalleryComponent
	},
	{
		path: 'design', component: WipComponent
	},
	{
		path: 'about', component: WipComponent
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
