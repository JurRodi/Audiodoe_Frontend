import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { StoryCreateModel } from '../../models/story/storyModel'
import { environment } from 'projects/back-office/src/environments/environment'
import { map } from 'rxjs'

const RESOURCE = '/story'

@Injectable({
  providedIn: 'root',
})
export class StoryControllerService {
  constructor(private http: HttpClient) {}

  public createStory(story: StoryCreateModel) {
    return this.http.post(environment.apiBaseUrl + RESOURCE + '/create', story)
  }
}
