import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePagesComponent } from './create-pages.component';

describe('CreatePagesComponent', () => {
  let component: CreatePagesComponent;
  let fixture: ComponentFixture<CreatePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
