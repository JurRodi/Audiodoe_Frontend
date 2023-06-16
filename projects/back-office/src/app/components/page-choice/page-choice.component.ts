import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'

@Component({
  selector: 'app-page-choice',
  templateUrl: './page-choice.component.html',
  styleUrls: ['./page-choice.component.scss'],
})
export class PageChoiceComponent {
  @Input() page!: PageModel
}
