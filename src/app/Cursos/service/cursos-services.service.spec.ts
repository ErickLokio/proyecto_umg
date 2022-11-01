import { TestBed } from '@angular/core/testing';

import { CursosServicesService } from './cursos-services.service';

describe('CursosServicesService', () => {
  let service: CursosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
