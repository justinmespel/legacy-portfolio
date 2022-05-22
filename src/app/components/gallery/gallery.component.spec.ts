import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Directive, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('GalleryComponent', () => {
	let component: GalleryComponent;
	let fixture: ComponentFixture<GalleryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NgbModule
            ],
			declarations: [ 
                GalleryComponent,
                MockFadeDirective
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GalleryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

    it('should have page-heading set to "Design"', () => {

        component.view = 'design';
        component.ngOnInit();
        fixture.detectChanges();

        const galleryPage: HTMLElement = fixture.nativeElement;
        const h1 = galleryPage.querySelector('h1');

        expect(h1?.textContent).toEqual("Design");
    });

    it('should have page-heading set to "Develop"', () => {

        component.view = 'develop';
        component.ngOnInit();
        fixture.detectChanges();

        const galleryPage: HTMLElement = fixture.nativeElement;
        const h1 = galleryPage.querySelector('h1');

        expect(h1?.textContent).toEqual("Develop");
    });

});

@Directive({
    selector: '[appFader]'
})
export class MockFadeDirective {
    @Input() set fadeSettings(_test: any) {}
}

