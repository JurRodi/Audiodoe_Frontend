import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodoeLibComponent } from './audiodoe-lib.component';

describe('AudiodoeLibComponent', () => {
  let component: AudiodoeLibComponent;
  let fixture: ComponentFixture<AudiodoeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiodoeLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiodoeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
