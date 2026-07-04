import { TestBed } from '@angular/core/testing';
import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateService);
  });

  it('should set and read the current user', () => {
    service.setCurrentUser({ id: '1', name: 'Admin', email: 'a@a.com', role: 'admin' });
    expect(service.currentUser()?.name).toBe('Admin');
  });
});
