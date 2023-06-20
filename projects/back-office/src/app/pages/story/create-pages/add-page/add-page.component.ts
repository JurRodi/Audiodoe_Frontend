import { Component, Input, OnInit } from '@angular/core'
import { CreateStoryService } from '../../services/create-story.service'
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import { EPageType } from 'projects/audiodoe-app/src/app/api-client/models/page/pageTypes'
import { pageTypeTranslations } from 'projects/back-office/src/app/api-client/models/page/pageTypeTranslations'
import { StoryModel } from 'projects/back-office/src/app/api-client/models/story/storyModel'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  @Input() public story?: StoryModel

  public pageForm = this.form.group(
    {
      pageType: ['', [Validators.required]],
      choicePath: ['', [Validators.pattern('^[a-z]+$')]],
    },
    { validators: this.choicePathValidator }
  )

  private choicePathValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const pageType = control.get('pageType')?.value
    const choicePath = control.get('choicePath')?.value

    if (pageType === EPageType.Choice && !choicePath) {
      return { requiredForChoice: true }
    }

    return null
  }

  public pageTypes: EPageType[] = [EPageType.Choice, EPageType.Interaction]
  public pageTypeTranslations = pageTypeTranslations

  public page = structuredClone(this.createStoryService.initPage)
  public pages = this.createStoryService.pages$.value

  public submitted = false
  public isLoading = false

  public isModalOpen = false
  public isSuccessModalOpen = false

  public get f() {
    return this.pageForm.controls
  }

  constructor(
    private createStoryService: CreateStoryService,
    private form: NonNullableFormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createStoryService.pages$.subscribe((pages) => {
      this.pages = pages
    })
  }

  public addPage() {
    this.submitted = true
    this.isLoading = true

    if (this.pageForm.invalid) {
      this.isLoading = false
      return
    }

    this.createPage(this.f.pageType.value as EPageType, this.f.choicePath.value)
    this.page = structuredClone(this.createStoryService.initPage)
    this.submitted = false
    this.isLoading = false
  }

  public createPage(pageType: EPageType, choicePath: string) {
    this.page.pageType = pageType
    if (this.page.pageType === EPageType.Choice) {
      const currentPath =
        this.pages[this.createStoryService.activePage$.value].choicePath
      this.page.choices = [currentPath, choicePath]
    }
    this.page.storyId = this.story!._id
    this.page.pageNumber = this.createStoryService.activePage$.value + 1
    this.page.choiceSplit = true
    this.createStoryService.pages$.value.splice(
      this.createStoryService.activePage$.value + 1,
      0,
      this.page
    )
    let reachedAddedPage = false
    this.createStoryService.pages$.value.forEach((page) => {
      if (
        (page.pageType === EPageType.Choice ||
          page.pageType === EPageType.Interaction) &&
        !page.hasPageNumberChanged
      ) {
        reachedAddedPage = true
        page.hasPageNumberChanged = true
        page.pageNumber =
          this.pages[this.createStoryService.activePage$.value].pageNumber + 1
        page.choicePath =
          this.pages[this.createStoryService.activePage$.value].choicePath
      }
      if (
        reachedAddedPage &&
        !page.hasPageNumberChanged &&
        page.pageNumber !==
          this.pages[this.createStoryService.activePage$.value].pageNumber &&
        (page.choicePath ===
          this.pages[this.createStoryService.activePage$.value].choicePath ||
          this.pages[
            this.createStoryService.activePage$.value + 1
          ].choices?.includes(page.choicePath))
      ) {
        page.pageNumber++
      }
    })
  }

  public openModal() {
    this.isModalOpen = true
  }

  public closeModal() {
    this.isModalOpen = false
  }

  public openSuccessModal() {
    this.isSuccessModalOpen = true
  }

  public navigateToStory() {
    this.router.navigate(['/story'])
  }

  public async createPages() {
    this.createStoryService
      .createPages()
      .pipe()
      .subscribe({
        next: () => {
          this.closeModal()
          this.openSuccessModal()
        },
      })
  }
}
