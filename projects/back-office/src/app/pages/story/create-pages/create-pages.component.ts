import { Component } from '@angular/core'
import { StoryModel } from '../../../api-client/models/story/storyModel'
import { ActivatedRoute } from '@angular/router'
import { CreateStoryService } from '../services/create-story.service'
import { PageModel } from '../../../api-client/models/page/pageModel'

@Component({
  selector: 'app-create-pages',
  templateUrl: './create-pages.component.html',
  styleUrls: ['./create-pages.component.scss'],
})
export class CreatePagesComponent {
  public storyId = this.route.snapshot.paramMap.get('storyId') || ''
  public story: StoryModel | undefined
  public pages: PageModel[] = []

  constructor(
    private route: ActivatedRoute,
    private createStoryService: CreateStoryService
  ) {}

  async ngOnInit(): Promise<void> {
    this.createStoryService.story$.subscribe((story) => {
      if (!story) return
      this.story = story
    })
    this.createStoryService.pages$.subscribe((pages) => {
      if (!pages) return
      this.pages = pages
    })
    await this.createStoryService.getStory(this.storyId)
    await this.createStoryService.getPages(this.storyId)
  }
}
