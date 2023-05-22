import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'projects/audiodoe-app/src/environments/environment'
import { lastValueFrom } from 'rxjs'
import { FilterModel } from '../../models/generic/filterModel'

const RESOURCE = '/story'

@Injectable({
  providedIn: 'root',
})
export class StoryControllerService {
  constructor(private http: HttpClient) {}

  public getStories(filters: FilterModel) {
    return lastValueFrom(
      this.http.post(environment.apiBaseUrl + RESOURCE, filters)
    )
  }
}
