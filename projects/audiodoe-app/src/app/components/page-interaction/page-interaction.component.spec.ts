import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInteractionComponent } from './page-interaction.component';

describe('PageInteractionComponent', () => {
  let component: PageInteractionComponent;
  let fixture: ComponentFixture<PageInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
