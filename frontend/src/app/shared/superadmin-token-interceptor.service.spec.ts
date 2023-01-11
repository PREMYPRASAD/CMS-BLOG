import { TestBed } from '@angular/core/testing';

import { SuperadminTokenInterceptorService } from './superadmin-token-interceptor.service';

describe('SuperadminTokenInterceptorService', () => {
  let service: SuperadminTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperadminTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
