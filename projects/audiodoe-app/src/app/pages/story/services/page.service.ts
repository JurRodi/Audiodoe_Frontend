import { Injectable } from '@angular/core'
import { PageControllerService } from '../../../api-client/services/page/page-controller.service'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { PageModel } from '../../../api-client/models/page/pageModel'

@Injectable()
export class PageService {
  private storyId = this.route.snapshot.paramMap.get('id') || ''
  private pageNumber = this.route.snapshot.paramMap.get('pageNumber') || ''

  public readonly page$ = new BehaviorSubject<PageModel | null>(null)
  public readonly pageLoading$ = new BehaviorSubject<boolean>(false)

  constructor(
    private pageController: PageControllerService,
    private route: ActivatedRoute
  ) {}

  public async getPage(): Promise<void> {
    this.pageLoading$.next(true)

    const res: any = await this.pageController.getPage(
      this.storyId,
      this.pageNumber
    )

    this.page$.next(res)
    this.pageLoading$.next(false)
  }
}
