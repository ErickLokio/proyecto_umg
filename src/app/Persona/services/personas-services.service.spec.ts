import { TestBed } from '@angular/core/testing';

import { PersonasServicesService } from './personas-services.service';

describe('PersonasServicesService', () => {
  let service: PersonasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
