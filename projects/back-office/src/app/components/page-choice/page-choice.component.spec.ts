import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChoiceComponent } from './page-choice.component';

describe('PageChoiceComponent', () => {
  let component: PageChoiceComponent;
  let fixture: ComponentFixture<PageChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
