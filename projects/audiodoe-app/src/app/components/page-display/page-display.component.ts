import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'
import { Router } from '@angular/router'
import { PageService } from '../../pages/story/services/page.service'

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.scss'],
})
export class PageDisplayComponent {
  @Input() page!: PageModel

  constructor(private router: Router, private pageService: PageService) {}

  public navigateToStory(): void {
    this.router.navigate(['story', this.page.storyId])
  }

  public previousPage(): void {
    this.pageService.getPage(
      this.page.storyId,
      (this.page.pageNumber - 1).toString()
    )
    this.router.navigate(['story', this.page.storyId, this.page.pageNumber - 1])
  }

  public nextPage(): void {
    this.pageService.getPage(
      this.page.storyId,
      (this.page.pageNumber + 1).toString()
    )
    this.router.navigate(['story', this.page.storyId, this.page.pageNumber + 1])
  }

  public toggleMute(): void {
    // TODO: toggle mute on btn click
    console.warn('toggleMute')
  }
}
