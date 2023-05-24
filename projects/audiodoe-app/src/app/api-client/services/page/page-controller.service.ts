import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'projects/audiodoe-app/src/environments/environment'
import { lastValueFrom } from 'rxjs'

const RESOURCE = '/page'

@Injectable({
  providedIn: 'root',
})
export class PageControllerService {
  constructor(private http: HttpClient) {}

  public getPage(
    storyId: string,
    pageNumber: string,
    choicePath: string | null
  ) {
    return lastValueFrom(
      this.http.get(
        environment.apiBaseUrl +
          RESOURCE +
          `/${storyId}/${pageNumber}/${choicePath}`
      )
    )
  }
}
