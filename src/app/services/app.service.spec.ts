import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {
	let service: AppService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AppService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('#getCodeGallery should return array values from observable', (done) => {
		service.getCodeGalleryData().subscribe(value => {
			expect(value.length).toBeGreaterThanOrEqual(1);
		});
	});

	it('#getDesignGallery should return array values from observable', (done) => {
		service.getDesignGalleryData().subscribe(value => {
			expect(value.length).toBeGreaterThanOrEqual(1);
		});
	});

});
