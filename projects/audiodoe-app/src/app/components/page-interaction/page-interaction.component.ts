import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'
import { PageService } from '../../pages/story/services/page.service'
import { Router } from '@angular/router'
import { EInteractionType } from '../../api-client/models/interaction/interactionTypes'

@Component({
  selector: 'app-page-interaction',
  templateUrl: './page-interaction.component.html',
  styleUrls: ['./page-interaction.component.scss'],
})
export class PageInteractionComponent {
  @Input() page!: PageModel

  public start = false
  public interactionTypes = EInteractionType

  constructor(protected pageService: PageService, private router: Router) {}

  public startInteraction(): void {
    this.start = true
  }

  public navigateToStory(): void {
    this.router.navigate(['story', this.page.storyId])
  }

  public toggleMute(): void {
    this.pageService.isMuted = !this.pageService.isMuted
  }

  public nextPage(): void {
    this.pageService.getPage(
      this.page.storyId,
      (this.page.pageNumber + 1).toString(),
      this.page.choicePath
    )
    this.router.navigate(['story', this.page.storyId, this.page.pageNumber + 1])
  }
}
