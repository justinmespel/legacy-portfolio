import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent  {

	public showMobileMenu: boolean = false;

	public mobileMenu: any = [
		{ name: "Home", route: 'home' },
		{ name: "Develop", route: 'develop' },
		{ name: "Design", route: 'design' },
		{ name: "About", route: 'about' }
	]

	public toggleMobileMenu(): void {
		this.showMobileMenu = !this.showMobileMenu;
	}
	
}
