import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { MetaService } from 'src/app/services/meta.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public lottieLogoOptions!: AnimationOptions;
	public isMobileLayout: boolean;

	public screenHeight: number;

	constructor(
		private router: Router,
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


		window.onresize = () => {
			this.isMobileLayout = window.innerWidth <= 768;
		};


		this.lottieLogoOptions = {
			path: "assets/animations/home-logo.json"
		}
	}

}
