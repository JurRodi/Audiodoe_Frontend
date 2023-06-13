import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { CreateStoryService } from '../../services/create-story.service'
import { initializeApp } from 'firebase/app'
import {
  StorageReference,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { environment } from 'projects/back-office/src/environments/environment'
import { StoryModel } from 'projects/back-office/src/app/api-client/models/story/storyModel'
import {
  PageModel,
  Animation,
} from 'projects/back-office/src/app/api-client/models/page/pageModel'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent {
  @Input() public story?: StoryModel

  public pages = this.createStoryService.pages$.value
  public page: PageModel | null = null
  public text = new FormControl('')

  public audioFile: File | null = null
  public hasAudio = false

  public animationFile: File | null = null
  public hasAnimation = false
  public initAnimation: Animation = {
    fileName: '',
    position: null,
  }
  public animation = structuredClone(this.initAnimation)
  public animationPosition = new FormControl('')

  public hasChoice1 = false
  public hasChoice2 = false
  public choice1File: File | null = null
  public choice2File: File | null = null

  private app = initializeApp(environment.firebaseConfig)
  private storage = getStorage(this.app)

  constructor(private createStoryService: CreateStoryService) {}

  ngOnInit(): void {
    this.createStoryService.activePage$.subscribe((activePage) => {
      this.page = this.createStoryService.pages$.value[activePage]
      this.text.setValue(this.page?.text)
      this.page?.audio ? (this.hasAudio = true) : (this.hasAudio = false)
      if (this.page?.animations?.length) {
        this.hasAnimation = true
        this.animation = this.page.animations[0]
        this.animationPosition.setValue(this.animation.position)
      } else {
        this.hasAnimation = false
        this.animation = structuredClone(this.initAnimation)
        this.animationPosition.setValue('')
      }
    })
  }

  public onTextChange(): void {
    if (!this.page) return
    if (this.page.pageType === 'Choice') {
      this.page.choiceQuestion = this.text.value!
    } else {
      this.page.text = this.text.value!
    }
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ] = this.page
  }

  public onAudioSelected(event: any): void {
    this.audioFile = event.target.files[0]
  }

  public async onAudioUpload(): Promise<void> {
    if (!this.audioFile || !this.story || !this.page) return
    const filename = this.audioFile.name
    this.page.audioFileName = filename
    const filePath = this.story.title + '/audio/' + filename
    const fileRef = ref(this.storage, filePath)
    await this.uploadAudio(fileRef, this.audioFile)
  }

  public async uploadAudio(
    fileRef: StorageReference,
    file: File
  ): Promise<void> {
    await uploadBytes(fileRef, file)
    await getDownloadURL(fileRef).then((url) => {
      this.page!.audio = url
    })
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ] = this.page!
    this.hasAudio = true
  }

  public resetAudioUpload(): void {
    this.hasAudio = false
  }

  public onAnimationSelected(event: any): void {
    this.animationFile = event.target.files[0]
  }

  public onAnimationUpload(): void {
    if (!this.animationFile || !this.story || !this.page) return
    this.page.animationFileName = this.animationFile.name
    const filePath =
      this.story.title + '/animation/' + this.page.animationFileName
    const fileRef = ref(this.storage, filePath)
    this.uploadAnimation(fileRef, this.animationFile)
  }

  public async uploadAnimation(
    fileRef: StorageReference,
    file: File
  ): Promise<void> {
    await uploadBytes(fileRef, file)
    await getDownloadURL(fileRef).then((url) => {
      this.animation.fileName = url
      this.page!.animations = [this.animation]
    })
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ] = this.page!
    this.hasAnimation = true
  }

  public resetAnimationUpload(): void {
    this.hasAnimation = false
  }

  public selectedPosition(event: any): void {
    this.animation.position = event.target.value
    this.page!.animations = [this.animation]
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ] = this.page!
    console.log(this.createStoryService.pages$.value)
  }

  public onImageSelected(event: any, isChoice1: boolean): void {
    const file = event.target.files[0]
    if (isChoice1) {
      this.choice1File = file
    } else {
      this.choice2File = file
    }
  }

  public onImageUpload(isChoice1: boolean): void {
    if (!this.story || !this.page) return
    const file = isChoice1 ? this.choice1File : this.choice2File
    if (!file) return
    isChoice1
      ? (this.page.choiceImage1FileName = file.name)
      : (this.page.choiceImage2FileName = file.name)
    const filePath = this.story.title + '/images/' + file.name
    const fileRef = ref(this.storage, filePath)
    this.uploadImage(fileRef, file, isChoice1)
  }

  public async uploadImage(
    fileRef: StorageReference,
    file: File,
    isChoice1: boolean
  ): Promise<void> {
    await uploadBytes(fileRef, file)
    await getDownloadURL(fileRef).then((url) => {
      if (isChoice1) {
        this.page!.choiceImage1 = url
        this.hasChoice1 = true
      } else {
        this.page!.choiceImage2 = url
        this.hasChoice2 = true
      }
    })
    this.createStoryService.pages$.value[
      this.createStoryService.activePage$.value
    ] = this.page!
  }

  public resetImageUpload(isChoice1: boolean): void {
    isChoice1 ? (this.hasChoice1 = false) : (this.hasChoice2 = false)
  }
}
