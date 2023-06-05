import { TestBed } from '@angular/core/testing'

import { CategoryControllerService } from './category-controller.service'

describe('CategoryControllerService', () => {
  let service: CategoryControllerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CategoryControllerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
