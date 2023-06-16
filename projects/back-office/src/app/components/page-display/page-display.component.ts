import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.scss'],
})
export class PageDisplayComponent {
  @Input() page!: PageModel
}
