import { TestBed } from '@angular/core/testing';

import { MetaService } from './meta.service';

describe('MetaService', () => {
  let service: MetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('default meta title should exist and be set', () => {
    expect(typeof service.defaultTitle === 'string').toBe(true);
    expect(service.defaultTitle.length).toBeGreaterThan(1);
  });

  it('default meta description should exist and be set', () => {
    expect(typeof service.defaultDescription === 'string').toBe(true);
    expect(service.defaultDescription.length).toBeGreaterThan(1);
  });

  it('#updateTitle meta tag function should exist', () => {
    expect(typeof service.updateTitle() === 'function').toBe(true);
  });

  it('#updateDescription meta tag function should exist', () => {
    expect(typeof service.updateDescription() === 'function').toBe(true);
  });


  it('#updateTitle function should accept param override', () => {
    expect(service.updateTitle('test'));
  });

  it('#updateDescription function should accept param override', () => {
    expect(service.updateDescription('test'));
  });
});
