import { Injectable } from '@angular/core'
import { CategoryControllerService } from '../../../api-client/services/category/category-controller.service'
import { BehaviorSubject } from 'rxjs'
import { CategoryModel } from '../../../api-client/models/category/categoryModel'
import { StoryControllerService } from '../../../api-client/services/story/story-controller.service'
import { StoryCreateModel } from '../../../api-client/models/story/storyModel'

@Injectable()
export class CreateStoryService {
  public readonly categories$ = new BehaviorSubject<CategoryModel[]>([])

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
}
