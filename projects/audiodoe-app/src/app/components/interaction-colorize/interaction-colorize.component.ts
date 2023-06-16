import { Component, OnInit } from '@angular/core'
import { EClickable } from '../../api-client/models/clickable/clickableTypes'
import { PageService } from '../../pages/story/services/page.service'
import { PageModel } from '../../api-client/models/page/pageModel'
import { ClickableModel } from '../../api-client/models/clickable/clickableModel'

const RESOURCE = '../../../assets/interaction/colorize/'

@Component({
  selector: 'app-interaction-colorize',
  templateUrl: './interaction-colorize.component.html',
  styleUrls: ['./interaction-colorize.component.scss'],
})
export class InteractionColorizeComponent implements OnInit {
  public pencils = [
    {
      value: 'red',
      image: `${RESOURCE}pencil-red.png`,
      selected: false,
    },
    {
      value: 'blue',
      image: `${RESOURCE}pencil-blue.png`,
      selected: false,
    },
    {
      value: 'green',
      image: `${RESOURCE}pencil-green.png`,
      selected: false,
    },
    {
      value: 'yellow',
      image: `${RESOURCE}pencil-yellow.png`,
      selected: false,
    },
    {
      value: 'orange',
      image: `${RESOURCE}pencil-orange.png`,
      selected: false,
    },
    {
      value: 'purple',
      image: `${RESOURCE}pencil-purple.png`,
      selected: false,
    },
    {
      value: 'none',
      image: `${RESOURCE}eraser.png`,
      selected: false,
    },
  ]

  public page: PageModel | null = null
  public clickable: ClickableModel | null = null
  public clickables: any[] = []
  public shape: EClickable | null = null

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.pageService.page$.subscribe((page) => {
      this.page = page
      this.shape = page?.interaction?.clickable.shape || null
      this.clickable = page?.interaction?.clickable || null
      this.clickables = Array.from(
        Array(page?.interaction?.clickable?.amount)
      ).map(() => structuredClone(this.clickable))
    })
  }

  public setActive(pencil: any) {
    this.pencils.forEach((p) => (p.selected = false))
    pencil.selected = true
  }

  public setColor(index: number) {
    const pencil = this.pencils.find((p) => p.selected)
    if (!pencil) return
    this.clickables[index].color = pencil.value
  }

  public setShape(index: number) {
    switch (this.shape) {
      case EClickable.Circle:
        return this.setCircle(index)
      default:
        return
    }
  }

  public setCircle(index: number) {
    if (this.shape !== EClickable.Circle) return
    const total = this.clickables.length
    const angle = (index * 360) / total
    return { transform: `rotate(${angle}deg) translateX(-55%)` }
  }
}
