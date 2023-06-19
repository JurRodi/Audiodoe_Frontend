import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { StoryCreateModel } from '../../models/story/storyModel'
import { environment } from 'projects/back-office/src/environments/environment'
import { lastValueFrom, map } from 'rxjs'
import { StoryFilterModel } from '../../models/story/storyFilterModel'

const RESOURCE = '/story'

@Injectable({
  providedIn: 'root',
})
export class StoryControllerService {
  constructor(private http: HttpClient) {}

  public createStory(story: StoryCreateModel) {
    return this.http.post(environment.apiBaseUrl + RESOURCE + '/create', story)
  }

  public getStory(id: string) {
    return lastValueFrom(
      this.http.get(environment.apiBaseUrl + RESOURCE + '/' + id)
    )
  }

  public getStories(filter: StoryFilterModel) {
    return lastValueFrom(
      this.http.post(environment.apiBaseUrl + RESOURCE, filter)
    )
  }
}
