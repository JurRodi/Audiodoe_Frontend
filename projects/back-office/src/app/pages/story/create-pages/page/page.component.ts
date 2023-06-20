import { Component, Input, OnInit } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { CreateStoryService } from '../../services/create-story.service'
import * as JSZip from 'jszip'
import {
  StorageReference,
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from 'firebase/storage'
import { initializeApp } from 'firebase/app'
import { environment } from 'projects/back-office/src/environments/environment'
import { StoryModel } from 'projects/audiodoe-app/src/app/api-client/models/story/storyModel'
import { PageModel } from 'projects/back-office/src/app/api-client/models/page/pageModel'
import { EPageType } from 'projects/back-office/src/app/api-client/models/page/pageTypes'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @Input() public story?: StoryModel

  public zipForm = this.form.group({
    images: ['', [Validators.required]],
  })

  private app = initializeApp(environment.firebaseConfig)
  private storage = getStorage(this.app)

  public submitted = false
  public isLoading = false
  public error = ''
  public hasPages = false

  public zip: File | null = null

  public pages: PageModel[] = []
  public pageTypes = EPageType

  public page = structuredClone(this.createStoryService.initPage)

  public get f() {
    return this.zipForm.controls
  }

  constructor(
    private form: NonNullableFormBuilder,
    protected createStoryService: CreateStoryService
  ) {}

  async ngOnInit(): Promise<void> {
    this.createStoryService.pages$.subscribe((pages) => {
      this.pages = pages
      this.pages.length ? (this.hasPages = true) : (this.hasPages = false)
    })
  }

  public onZipSelected(event: any): void {
    this.zip = event.target.files[0]
    if (!this.zip) return
    if (this.zip.size > MAX_FILE_SIZE) {
      this.error = 'Zip bestand is te groot'
    }
  }

  public async extractZip(zip: File | null) {
    if (!zip) return

    const fileReader = new FileReader()
    fileReader.onload = () => {
      const zipData = fileReader.result
      if (!zipData || typeof zipData === 'string') return
      JSZip.loadAsync(zipData).then((zip: JSZip) => {
        const allowedExtensions = ['png', 'jpg', 'jpeg', 'svg']
        zip.forEach(async (relativePath, zipEntry: JSZip.JSZipObject) => {
          if (zipEntry.dir && !zipEntry.name) return
          const extension = zipEntry.name.split('.').pop()?.toLowerCase()
          if (!allowedExtensions.includes(extension!) || !this.story) return
          const filename = zipEntry.name.split('/').pop()
          const filePath = this.story.title + '/backgroundImages/' + filename
          const fileRef = ref(this.storage, filePath)
          zipEntry.async('base64').then(async (image) => {
            await this.uploadZip(fileRef, filename!, image)
            this.createStoryService.activePage$.next(0)
          })
        })
        this.createStoryService.pages$.next(this.pages)
      })
    }
    fileReader.readAsArrayBuffer(zip)
  }

  public async uploadZip(
    fileRef: StorageReference,
    filename: string,
    image: string
  ): Promise<void> {
    await uploadString(fileRef, image, 'base64')
    await getDownloadURL(fileRef).then((url) => {
      if (!this.story) return
      this.page = structuredClone(this.createStoryService.initPage)
      this.page.backgroundImage = url
      this.page.backgroundColor = this.story.backGroundColor
      this.page.storyId = this.story._id
      this.page.choicePath = filename!.slice(-5, -4)
      this.page.pageNumber = +filename!.slice(-8, -5)
      this.pages.push(this.page)
      this.sortPages(this.pages)
    })
  }

  public sortPages(pages: PageModel[]): void {
    pages.sort((a, b) => {
      if (a.pageNumber < b.pageNumber) return -1
      if (a.pageNumber > b.pageNumber) return 1
      if (a.pageNumber === b.pageNumber)
        if (a.choicePath < b.choicePath) return -1
        else if (a.choicePath > b.choicePath) return 1
      return 0
    })
  }

  public async submitZipForm(): Promise<void> {
    this.submitted = true

    if (this.zipForm.invalid || this.error !== '') {
      return
    }

    this.isLoading = true
    this.error = ''

    await this.extractZip(this.zip)
    this.isLoading = false
    this.error = ''
    this.hasPages = true
  }

  public goToGame(): void {
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ].startInteraction = true
  }

  public goToOverview(): void {
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ].startInteraction = false
  }
}
