import { TestBed } from '@angular/core/testing';
import { CodeData } from 'src/assets/data/code.data';
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

	it('#getCodeGallery should return array values from observable', () => {
		service.getCodeGalleryData().subscribe(value => {
			expect(value.length).toBeGreaterThanOrEqual(1);
		});
	});

	it('#getDesignGallery should return array values from observable', () => {
		service.getDesignGalleryData().subscribe(value => {
			expect(value.length).toBeGreaterThanOrEqual(1);
		});
	});

});
