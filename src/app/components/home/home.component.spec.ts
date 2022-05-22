import { CUSTOM_ELEMENTS_SCHEMA, Directive, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ 
			declarations: [ 
                HomeComponent,
                MockFadeDirective
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

@Directive({
    selector: '[appFader]'
})
export class MockFadeDirective {
    @Input() set fadeSettings(_test: any) {}
}
