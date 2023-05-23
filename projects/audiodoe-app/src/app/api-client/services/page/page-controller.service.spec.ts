import { TestBed } from '@angular/core/testing';

import { PageControllerService } from './page-controller.service';

describe('PageControllerService', () => {
  let service: PageControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
