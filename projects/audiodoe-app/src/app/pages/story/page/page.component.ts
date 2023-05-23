import { Component, OnDestroy, OnInit } from '@angular/core'
import { PageModel } from '../../../api-client/models/page/pageModel'
import { PageService } from '../services/page.service'
import { Subscription } from 'rxjs'
import { EPageType } from '../../../api-client/models/page/pageTypes'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [PageService],
})
export class PageComponent implements OnInit, OnDestroy {
  public page: PageModel | null = null
  public isLoading = false
  public pageType = EPageType

  public subscriptions: Subscription[] = []

  constructor(private pageService: PageService) {}

  async ngOnInit(): Promise<void> {
    this.subscriptions.push(
      this.pageService.page$.subscribe((page) => {
        if (!page) return
        this.page = page
      }),
      this.pageService.pageLoading$.subscribe((isLoading) => {
        this.isLoading = isLoading
      })
    )
    await this.pageService.getPage()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
