import { TestBed, inject } from '@angular/core/testing';

import { AuthoursService } from './authours.service';

describe('AuthoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthoursService]
    });
  });

  it('should be created', inject([AuthoursService], (service: AuthoursService) => {
    expect(service).toBeTruthy();
  }));
});
