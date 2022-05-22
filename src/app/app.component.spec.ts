import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MockLocationStrategy } from '@angular/common/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationStrategy } from '@angular/common';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            providers: [{ 
                provide: LocationStrategy,
                useClass: MockLocationStrategy
            }],
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent,
                NavBarComponent
			],
		}).compileComponents();
 	});

    beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

    it('#toggleMobileMenu should toggle showMobileMenu boolean', () => {
        let previousState = component.showMobileMenu;
        component.toggleMobileMenu();
        expect(previousState === !component.showMobileMenu).toBeTrue();
    });

});
