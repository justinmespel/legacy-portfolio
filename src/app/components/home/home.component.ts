import { Component, HostListener, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { MetaService } from 'src/app/services/meta.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public lottieLogoOptions!: AnimationOptions;
	public screenHeight: number;

	constructor(
		private metaService: MetaService
	) { 
		this.onResize(null);
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.screenHeight = window.innerHeight;
	}

	ngOnInit(): void {

		// Reset meta and page title
		this.metaService.updateTitle();

		this.lottieLogoOptions = {
			path: "assets/animations/home-logo.json"
		}
	}

}
