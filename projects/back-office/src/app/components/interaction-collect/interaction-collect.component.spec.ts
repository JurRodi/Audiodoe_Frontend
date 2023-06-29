import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionCollectComponent } from './interaction-collect.component';

describe('InteractionCollectComponent', () => {
  let component: InteractionCollectComponent;
  let fixture: ComponentFixture<InteractionCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionCollectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
