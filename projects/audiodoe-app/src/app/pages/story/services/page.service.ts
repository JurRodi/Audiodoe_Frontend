import { Injectable } from '@angular/core'
import { PageControllerService } from '../../../api-client/services/page/page-controller.service'
import { BehaviorSubject } from 'rxjs'
import { PageModel } from '../../../api-client/models/page/pageModel'

@Injectable({
  providedIn: 'root',
})
export class PageService {
  public readonly page$ = new BehaviorSubject<PageModel | null>(null)
  public readonly pageLoading$ = new BehaviorSubject<boolean>(false)

  constructor(private pageController: PageControllerService) {}

  public async getPage(storyId: string, pageNumber: string): Promise<void> {
    this.pageLoading$.next(true)

    const res: any = await this.pageController.getPage(storyId, pageNumber)

    this.page$.next(res)
    this.pageLoading$.next(false)
  }
}
