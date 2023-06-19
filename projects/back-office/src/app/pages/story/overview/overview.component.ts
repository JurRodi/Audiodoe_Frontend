import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { StoryModel } from '../../../api-client/models/story/storyModel'
import { Subscription } from 'rxjs'
import { StoryOverviewService } from '../services/story-overview.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false
  public stories: StoryModel[] | null = null

  private subscription: Subscription[] = []

  constructor(
    private router: Router,
    private storyService: StoryOverviewService
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription.push(
      this.storyService.stories$.subscribe((res) => {
        if (!res) return
        this.stories = res
      }),
      this.storyService.storyLoader$.subscribe((res) => {
        this.isLoading = res
      })
    )
    await this.storyService.getStories()
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe())
  }

  public navigateToStory(id: string): void {
    this.router.navigate([`/story/create-pages/${id}`])
  }
}
