import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should authenticate the admin user', (done) => {
    service.login('admin', 'admin').subscribe((result) => {
      expect(result.success).toBe(true);
      done();
    });
  });
});
