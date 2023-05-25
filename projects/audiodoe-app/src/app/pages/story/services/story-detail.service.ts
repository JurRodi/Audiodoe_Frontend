import { Injectable } from '@angular/core'
import { StoryControllerService } from '../../../api-client/services/story/story-controller.service'
import { BehaviorSubject } from 'rxjs'
import { StoryDetailModel } from '../../../api-client/models/story/storyModel'
import { ActivatedRoute } from '@angular/router'

@Injectable()
export class StoryDetailService {
  public storyId = this.route.snapshot.paramMap.get('id') || ''

  public readonly story$ = new BehaviorSubject<StoryDetailModel | null>(null)
  public readonly storyLoading$ = new BehaviorSubject<boolean>(false)

  constructor(
    private route: ActivatedRoute,
    private storyController: StoryControllerService
  ) {}

  public async getStory(): Promise<void> {
    this.storyLoading$.next(true)

    const res: any = await this.storyController.getStory(this.storyId)

    this.story$.next(res)
    this.storyLoading$.next(false)
  }
}
