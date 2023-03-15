import { TestBed } from '@angular/core/testing';

import { MakavService } from './makav.service';

describe('MakavService', () => {
  let service: MakavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
