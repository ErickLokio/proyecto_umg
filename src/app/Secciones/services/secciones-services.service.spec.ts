import { TestBed } from '@angular/core/testing';

import { SeccionesServicesService } from './secciones-services.service';

describe('SeccionesServicesService', () => {
  let service: SeccionesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeccionesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
