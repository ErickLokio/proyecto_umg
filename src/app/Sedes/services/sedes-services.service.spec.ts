import { TestBed } from '@angular/core/testing';

import { SedesServicesService } from './sedes-services.service';

describe('SedesServicesService', () => {
  let service: SedesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
