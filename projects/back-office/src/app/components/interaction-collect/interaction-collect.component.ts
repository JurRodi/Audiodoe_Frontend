import { Component, OnInit } from '@angular/core'
import { CreateStoryService } from '../../pages/story/services/create-story.service'
import { PageModel } from '../../api-client/models/page/pageModel'

@Component({
  selector: 'app-interaction-collect',
  templateUrl: './interaction-collect.component.html',
  styleUrls: ['./interaction-collect.component.scss'],
})
export class InteractionCollectComponent implements OnInit {
  public initClickable = {
    x: '',
    y: '',
  }
  public clickable = structuredClone(this.initClickable)
  public clickables: any[] = []

  public page: PageModel | null = null

  constructor(private createStoryService: CreateStoryService) {}

  ngOnInit(): void {
    this.createStoryService.clickableAmount$.subscribe((amount) => {
      this.clickables = Array.from(Array(amount)).map(() =>
        structuredClone(this.clickable)
      )
    })
    this.createStoryService.pages$.subscribe((pages) => {
      this.page = pages[this.createStoryService.activePage$.value]
      this.setBgImage()
    })
  }

  public setBgImage() {
    if (!this.page?.interaction?.backgroundImage) return
    return { backgroundImage: `url(${this.page.interaction.backgroundImage})` }
  }

  public setClickablePosition(index: number) {
    this.clickable = this.clickables[index]
    this.clickable.x = Math.random() * 100 + '%'
    this.clickable.y = Math.random() * 100 + '%'
    return { top: this.clickable.y, left: this.clickable.x }
  }

  public hideClickable(index: number) {
    this.clickables.splice(index, 1)
  }
}
