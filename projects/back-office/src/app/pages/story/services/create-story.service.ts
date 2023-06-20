import { Injectable } from '@angular/core'
import { CategoryControllerService } from '../../../api-client/services/category/category-controller.service'
import { BehaviorSubject } from 'rxjs'
import { CategoryModel } from '../../../api-client/models/category/categoryModel'
import { StoryControllerService } from '../../../api-client/services/story/story-controller.service'
import {
  StoryCreateModel,
  StoryModel,
} from '../../../api-client/models/story/storyModel'
import { PageModel } from '../../../api-client/models/page/pageModel'
import { EPageType } from '../../../api-client/models/page/pageTypes'
import { EClickable } from '../../../api-client/models/clickable/clickableTypes'
import { PageControllerService } from '../../../api-client/services/page/page-controller.service'

@Injectable({
  providedIn: 'root',
})
export class CreateStoryService {
  public initPage: PageModel = {
    pageNumber: 1,
    choicePath: 'a',
    pageType: EPageType.Display,
    storyId: '',
    text: '',
    audio: '',
    backgroundImage: null,
    backgroundColor: null,
    animations: null,
    choiceQuestion: null,
    choices: null,
    choiceImage1: null,
    choiceImage2: null,
    choiceSplit: false,
    instructionsTitle: null,
    interaction: null,
  }

  public readonly categories$ = new BehaviorSubject<CategoryModel[]>([])
  public readonly pages$ = new BehaviorSubject<PageModel[]>([])
  public readonly story$ = new BehaviorSubject<StoryModel | null>(null)
  public readonly activePage$ = new BehaviorSubject<number>(0)
  public readonly clickableAmount$ = new BehaviorSubject<number>(0)
  public readonly clickableShape$ = new BehaviorSubject<EClickable | null>(null)

  constructor(
    private categoryController: CategoryControllerService,
    private storyController: StoryControllerService,
    private pageController: PageControllerService
  ) {}

  public async getCategories(): Promise<void> {
    const res: any = await this.categoryController.getCategories()
    this.categories$.next(res)
  }

  public createStory(story: StoryCreateModel) {
    return this.storyController.createStory(story)
  }

  public async getStory(id: string) {
    const res: any = await this.storyController.getStory(id)
    this.story$.next(res)
  }

  public createPages() {
    return this.pageController.createPages(this.pages$.value)
  }

  public async getPages(storyId: string) {
    const res: any = await this.pageController.getPages(storyId)
    this.pages$.next(res)
  }
}
