import { TestBed } from '@angular/core/testing';

import { StoryControllerService } from './story-controller.service';

describe('StoryControllerService', () => {
  let service: StoryControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
