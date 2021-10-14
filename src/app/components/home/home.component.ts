import { Component, OnInit } from '@angular/core';
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

	constructor(
		private router: Router,
		private metaService: MetaService
	) { 
	}

	ngOnInit(): void {

		// Reset meta and page title
		this.metaService.updateTitle();

		this.lottieLogoOptions = {
			path: "assets/animations/home-logo.json"
		}
	}

}
