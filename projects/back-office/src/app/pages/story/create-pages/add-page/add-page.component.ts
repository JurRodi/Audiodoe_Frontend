import { Component } from '@angular/core'
import { CreateStoryService } from '../../services/create-story.service'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { EPageType } from 'projects/audiodoe-app/src/app/api-client/models/page/pageTypes'
import { pageTypeTranslations } from 'projects/back-office/src/app/api-client/models/page/pageTypeTranslations'

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent {
  public pageForm = this.form.group({
    pageType: ['', [Validators.required]],
  })

  public pageTypes: EPageType[] = [
    EPageType.Display,
    EPageType.Choice,
    EPageType.Interaction,
  ]

  public pageTypeTranslations = pageTypeTranslations

  constructor(
    private createStoryService: CreateStoryService,
    private form: NonNullableFormBuilder
  ) {}

  public addPage() {
    console.warn('add page')
  }

  public createPages() {
    // this.createStoryService.createPages()
    console.warn('create pages')
  }
}
