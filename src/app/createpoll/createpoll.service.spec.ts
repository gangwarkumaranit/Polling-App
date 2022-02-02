import { TestBed } from '@angular/core/testing';

import { CreatepollService } from './createpoll.service';

describe('CreatepollService', () => {
  let service: CreatepollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatepollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
