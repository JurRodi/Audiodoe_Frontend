import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'
import { EInteractionType } from '../../api-client/models/interaction/interactionTypes'

@Component({
  selector: 'app-page-interaction',
  templateUrl: './page-interaction.component.html',
  styleUrls: ['./page-interaction.component.scss'],
})
export class PageInteractionComponent {
  @Input() page!: PageModel

  public interactionTypes = EInteractionType
}
