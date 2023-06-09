import { Component, OnDestroy, OnInit } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CreateStoryService } from '../services/create-story.service'
import { Subscription, first } from 'rxjs'
import { CategoryModel } from '../../../api-client/models/category/categoryModel'
import { CategoryTranslationMap } from '../../../api-client/models/category/categoryTranslation'
import { StoryCreateModel } from '../../../api-client/models/story/storyModel'
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { environment } from 'projects/back-office/src/environments/environment'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public storyForm = this.form.group({
    title: ['', [Validators.required]],
    thumbnail: ['', [Validators.required]],
    backGroundColor: ['', [Validators.required]],
    description: ['', [Validators.required]],
    duration: ['', [Validators.required]],
    ageGroup: ['', [Validators.required]],
    category: ['', [Validators.required]],
    pageCount: ['', [Validators.required]],
  })

  public categories: CategoryModel[] = []
  public story?: StoryCreateModel

  private subscription: Subscription[] = []

  public submitted = false
  public isLoading = false
  public error = ''
  public thumbnail: File | null = null

  private app = initializeApp(environment.firebaseConfig)
  private storage = getStorage(this.app)

  constructor(
    private form: NonNullableFormBuilder,
    private router: Router,
    private createStoryService: CreateStoryService
  ) {}

  public get f() {
    return this.storyForm.controls
  }

  async ngOnInit(): Promise<void> {
    this.subscription.push(
      this.createStoryService.categories$.subscribe((res) => {
        if (!res) return
        this.categories = res
        this.categories.forEach((item) => {
          item.translatedName = CategoryTranslationMap[item.name]
        })
      })
    )
    await this.createStoryService.getCategories()
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe()
    })
  }

  public onFileSelected(event: any): void {
    this.thumbnail = event.target.files[0]
  }

  public async uploadImage(image: File | null, imagePath: string) {
    if (!image) return
    const filePath = imagePath + '/thumbnial/' + image.name
    const fileRef = ref(this.storage, filePath)
    await uploadBytes(fileRef, image)
    await getDownloadURL(fileRef).then((url) => {
      this.story!.thumbnail = url
    })
  }

  public async submitForm(): Promise<void> {
    this.submitted = true

    if (this.storyForm.invalid) {
      return
    }

    this.isLoading = true
    this.error = ''
    this.story = this.storyForm.getRawValue()
    await this.uploadImage(this.thumbnail, this.story.title)
    this.createStoryService
      .createStory(this.story!)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['story/create-pages/' + res.storyId])
        },
        error: () => {
          this.error = 'error'
          this.isLoading = false
        },
      })
  }
}
