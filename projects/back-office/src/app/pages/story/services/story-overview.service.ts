import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { StoryModel } from '../../../api-client/models/story/storyModel'
import { StoryControllerService } from '../../../api-client/services/story/story-controller.service'
import { StoryFilterModel } from '../../../api-client/models/story/storyFilterModel'

@Injectable({
  providedIn: 'root',
})
export class StoryOverviewService {
  private initialfilters: StoryFilterModel = {
    filterValues: {
      category: null,
    },
    searchTerm: '',
  }
  public filter = structuredClone(this.initialfilters)

  public readonly stories$ = new BehaviorSubject<StoryModel[]>([])
  public readonly storyLoader$ = new BehaviorSubject<boolean>(false)

  constructor(private storyController: StoryControllerService) {}

  public async getStories() {
    this.storyLoader$.next(true)

    const res: any = await this.storyController.getStories(this.filter)

    this.storyLoader$.next(false)
    this.stories$.next(res)
  }
}
