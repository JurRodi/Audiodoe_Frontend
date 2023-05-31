import { Component, OnDestroy, OnInit } from '@angular/core'
import { PageModel } from '../../../api-client/models/page/pageModel'
import { PageService } from '../services/page.service'
import { Subscription } from 'rxjs'
import { EPageType } from '../../../api-client/models/page/pageTypes'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  private storyId = this.route.snapshot.paramMap.get('id') || ''
  public pageNumber = this.route.snapshot.paramMap.get('pageNumber') || ''
  public standardChoicePath = localStorage.getItem('choicePath') || 'a'

  public page: PageModel | null = null
  public isLoading = false
  public pageType = EPageType

  public subscriptions: Subscription[] = []

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscriptions.push(
      this.pageService.page$.subscribe((page) => {
        if (!page) return
        this.page = page
        this.page.backgroundImage = `assets/images/${page.backgroundImage}`
      }),
      this.pageService.pageLoading$.subscribe((isLoading) => {
        this.isLoading = isLoading
      })
    )
    await this.pageService.getPage(
      this.storyId,
      this.pageNumber,
      this.standardChoicePath
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
    localStorage.removeItem('choicePath')
  }
}
