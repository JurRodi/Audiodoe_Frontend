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
import { PageModel } from 'projects/back-office/src/app/api-client/models/page/pageModel'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent {
  @Input() public story?: StoryModel

  public page: PageModel | null = null
  public text = new FormControl('')
  public audio = new FormControl('')
  public audioFile: File | null = null
  public hasAudio = false

  private app = initializeApp(environment.firebaseConfig)
  private storage = getStorage(this.app)

  constructor(private createStoryService: CreateStoryService) {}

  ngOnInit(): void {
    this.createStoryService.activePage$.subscribe((activePage) => {
      this.page = this.createStoryService.pages$.value[activePage]
      this.text.setValue(this.page?.text)
      this.audio.setValue(null)
      this.page?.audio ? (this.hasAudio = true) : (this.hasAudio = false)
    })
  }

  public onTextChange(): void {
    if (!this.page) return
    this.page.text = this.text.value!
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
    await this.uploadFile(fileRef, this.audioFile)
  }

  public async uploadFile(
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
}
