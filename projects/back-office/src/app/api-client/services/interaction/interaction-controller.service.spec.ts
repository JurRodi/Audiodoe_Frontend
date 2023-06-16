import { TestBed } from '@angular/core/testing';

import { InteractionControllerService } from './interaction-controller.service';

describe('InteractionControllerService', () => {
  let service: InteractionControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
