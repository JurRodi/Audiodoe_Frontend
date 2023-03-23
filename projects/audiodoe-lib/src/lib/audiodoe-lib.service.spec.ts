import { TestBed } from '@angular/core/testing';

import { AudiodoeLibService } from './audiodoe-lib.service';

describe('AudiodoeLibService', () => {
  let service: AudiodoeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiodoeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
