import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public lottieLogoOptions!: AnimationOptions;

	constructor() { }

	ngOnInit(): void {
		this.lottieLogoOptions = {
			path: "assets/animations/home-logo.json"
		}
	}

}
