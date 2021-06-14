import { TestBed } from '@angular/core/testing';

import { KbDataService } from './kb-data.service';

describe('KbDataService', () => {
  let service: KbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
