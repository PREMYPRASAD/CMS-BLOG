import { TestBed } from '@angular/core/testing';

import { UserTokenInterceptorService } from './user-token-interceptor.service';

describe('UserTokenInterceptorService', () => {
  let service: UserTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
