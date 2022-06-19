import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { FadeInOutDirective } from './directives/fade.directive';


export function playerFactory() {
	return player;
}

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavBarComponent,
		GalleryComponent,
		AboutComponent,
		FadeInOutDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		BrowserAnimationsModule,
		LottieModule.forRoot({ player: playerFactory }),
        NgxSkeletonLoaderModule
	],
	providers: [
		Meta,
		Title
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
