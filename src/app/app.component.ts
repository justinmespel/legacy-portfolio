import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent  {

	public showMobileMenu: boolean = false;

	public toggleMobileMenu(): void {
		this.showMobileMenu = !this.showMobileMenu;
	}
	
}
