import { TestBed } from '@angular/core/testing';

import { StoryOverviewService } from './story-overview.service';

describe('StoryOverviewService', () => {
  let service: StoryOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
