import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'
import { PageService } from '../../pages/story/services/page.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-page-interaction',
  templateUrl: './page-interaction.component.html',
  styleUrls: ['./page-interaction.component.scss'],
})
export class PageInteractionComponent {
  @Input() page!: PageModel

  public start = false

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
}
