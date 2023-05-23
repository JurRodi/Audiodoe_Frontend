import { TestBed } from '@angular/core/testing'

import { StoryDetailService } from './story-detail.service'

describe('StoryDetailService', () => {
  let service: StoryDetailService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(StoryDetailService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
