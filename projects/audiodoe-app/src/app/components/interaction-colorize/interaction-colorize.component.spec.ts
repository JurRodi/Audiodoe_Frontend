import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionColorizeComponent } from './interaction-colorize.component';

describe('InteractionColorizeComponent', () => {
  let component: InteractionColorizeComponent;
  let fixture: ComponentFixture<InteractionColorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionColorizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionColorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
