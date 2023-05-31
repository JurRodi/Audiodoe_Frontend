import { Component, Input } from '@angular/core'
import { PageModel } from '../../api-client/models/page/pageModel'
import { Router } from '@angular/router'
import { PageService } from '../../pages/story/services/page.service'

@Component({
  selector: 'app-page-choice',
  templateUrl: './page-choice.component.html',
  styleUrls: ['./page-choice.component.scss'],
})
export class PageChoiceComponent {
  @Input() page!: PageModel

  constructor(private router: Router, private pageService: PageService) {}

  public setChoice(choice: string): void {
    localStorage.setItem('choicePath', choice)
    this.pageService.getPage(
      this.page.storyId,
      (this.page.pageNumber + 1).toString(),
      choice
    )
    this.router.navigate([
      '/story',
      this.page.storyId,
      this.page.pageNumber + 1,
    ])
  }
}
