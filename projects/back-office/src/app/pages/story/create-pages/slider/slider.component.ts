import { Component, OnInit } from '@angular/core'
import { CreateStoryService } from '../../services/create-story.service'
import { PageModel } from 'projects/audiodoe-app/src/app/api-client/models/page/pageModel'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public pages: PageModel[] = []

  constructor(protected createStoryService: CreateStoryService) {}

  ngOnInit(): void {
    this.createStoryService.pages$.subscribe((pages) => {
      this.pages = pages
    })
  }

  public setActiveImage(i: number) {
    this.createStoryService.activePage$.next(i)
  }
}
