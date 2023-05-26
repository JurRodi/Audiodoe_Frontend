import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'

@Component({
  selector: 'app-page-interaction',
  templateUrl: './page-interaction.component.html',
  styleUrls: ['./page-interaction.component.scss'],
})
export class PageInteractionComponent {
  @Input() page!: PageModel

  public start = false

  public startInteraction(): void {
    this.start = true
  }
}
