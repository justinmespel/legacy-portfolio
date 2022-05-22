import { CUSTOM_ELEMENTS_SCHEMA, Directive, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ 
                AboutComponent,
                MockFadeDirective
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutComponent);
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
