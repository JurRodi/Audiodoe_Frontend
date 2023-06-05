import { TestBed } from '@angular/core/testing';

import { CreateStoryService } from './create-story.service';

describe('CreateStoryService', () => {
  let service: CreateStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
