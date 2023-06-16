import { Component, OnDestroy, OnInit } from '@angular/core'
import { StoryModel } from '../../../api-client/models/story/storyModel'
import { Subscription, debounceTime } from 'rxjs'
import { CategoryModel } from '../../../api-client/models/category/categoryModel'
import { CategoryControllerService } from '../../../api-client/services/category/category-controller.service'
import { StoryOverviewService } from '../services/story-overview.service'
import { Router } from '@angular/router'
import { CategoryTranslationMap } from '../../../api-client/models/category/categoryTranslation'

@Component({
  selector: 'app-story',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.scss'],
})
export class StoryOverviewComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false
  public categories: CategoryModel[] | null = null
  public stories: StoryModel[] | null = null
  public searchTerm: string = ''

  private subscription: Subscription[] = []

  constructor(
    protected storyService: StoryOverviewService,
    protected categoryService: CategoryControllerService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription.push(
      this.storyService.stories$.subscribe((res) => {
        if (!res) return
        this.stories = res
      }),
      this.storyService.category$.subscribe((res) => {
        if (!res) return
        this.categories = res
        this.categories.forEach((category) => {
          category.imgPath = 'assets/icons/' + category.imgPath
          category.translatedName = CategoryTranslationMap[category.name]
        })
      }),
      this.storyService.storyLoader$.subscribe((res) => {
        this.isLoading = res
      }),
      this.storyService.categoryLoader$.subscribe((res) => {
        this.isLoading = res
      }),
      this.storyService.searchTerm$.pipe(debounceTime(500)).subscribe((res) => {
        this.storyService.setSearchFilter(res)
      })
    )
    await this.storyService.getCategories()
    await this.storyService.getStory()
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe())
  }

  public changeSearchTerm(searchTerm: string) {
    this.storyService.searchTerm$.next(searchTerm)
  }

  public navigateToStory(id: string) {
    this.router.navigate(['story', id])
  }
}
