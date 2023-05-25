import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'projects/audiodoe-app/src/environments/environment'
import { BehaviorSubject, lastValueFrom } from 'rxjs'
import { StoryFilterModel } from '../../../api-client/models/story/storyFilterModel'
import { StoryModel } from '../../../api-client/models/story/storyModel'
import { ECategory } from '../../../api-client/models/category/categoryTranslation'
import { StoryControllerService } from '../../../api-client/services/story/story-controller.service'
import { CategoryControllerService } from '../../../api-client/services/category/category-controller.service'
import { CategoryModel } from '../../../api-client/models/category/categoryModel'

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

  private filters = structuredClone(this.initialfilters)

  public readonly stories$ = new BehaviorSubject<StoryModel[]>([])
  public readonly storyLoader$ = new BehaviorSubject<boolean>(false)

  public readonly category$ = new BehaviorSubject<CategoryModel[]>([])
  public readonly categoryLoader$ = new BehaviorSubject<boolean>(false)

  public readonly searchTerm$ = new BehaviorSubject<string>('')

  constructor(
    private storyController: StoryControllerService,
    private categoryController: CategoryControllerService
  ) {}

  public async getStory() {
    this.storyLoader$.next(true)

    const res: any = await this.storyController.getStories(this.filters)

    this.storyLoader$.next(false)
    this.stories$.next(res)
  }

  public async getCategories() {
    this.categoryLoader$.next(true)

    const res: any = await this.categoryController.getCategories()

    this.categoryLoader$.next(false)
    this.category$.next(res)
  }

  public async setCategoryFilter(category: string) {
    this.filters.filterValues.category = category as ECategory
    await this.getStory()
  }

  public async setSearchFilter(searchTerm: string) {
    if (this.filters.searchTerm === searchTerm) return
    this.filters.searchTerm = searchTerm
    await this.getStory()
  }

  public async resetFilters() {
    this.filters = structuredClone(this.initialfilters)
    await this.getStory()
  }
}
