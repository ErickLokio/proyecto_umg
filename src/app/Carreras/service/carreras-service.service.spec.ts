import { TestBed } from '@angular/core/testing';

import { CarrerasServiceService } from './carreras-service.service';

describe('CarrerasServiceService', () => {
  let service: CarrerasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrerasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
