import { Component, OnDestroy, OnInit } from '@angular/core'
import { StoryDetailService } from '../services/story-detail.service'
import { Subscription } from 'rxjs'
import { StoryDetailModel } from '../../../api-client/models/story/storyModel'
import { Router } from '@angular/router'

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss'],
  providers: [StoryDetailService],
})
export class StoryDetailComponent implements OnInit, OnDestroy {
  public isLoading = true
  public story: StoryDetailModel | null = null

  public subscription: Subscription[] = []

  constructor(
    private detailService: StoryDetailService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription.push(
      this.detailService.story$.subscribe((res) => {
        if (!res) return
        this.story = res
      }),
      this.detailService.storyLoading$.subscribe((res) => {
        this.isLoading = res
      })
    )
    await this.detailService.getStory()
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe())
  }

  public navigateBack(): void {
    this.router.navigate(['/stories'])
  }
}
