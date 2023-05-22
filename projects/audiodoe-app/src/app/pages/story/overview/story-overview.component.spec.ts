import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StoryOverviewComponent } from './story-overview.component'

describe('StoryOverviewComponent', () => {
  let component: StoryOverviewComponent
  let fixture: ComponentFixture<StoryOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryOverviewComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(StoryOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
