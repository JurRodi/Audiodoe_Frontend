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

@Injectable({
  providedIn: 'root',
})
export class CreateStoryService {
  public readonly categories$ = new BehaviorSubject<CategoryModel[]>([])
  public readonly pages$ = new BehaviorSubject<PageModel[]>([])
  public readonly story$ = new BehaviorSubject<StoryModel | null>(null)
  public readonly activePage$ = new BehaviorSubject<number>(0)

  constructor(
    private categoryController: CategoryControllerService,
    private storyController: StoryControllerService
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
}
