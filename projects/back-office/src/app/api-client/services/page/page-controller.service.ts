import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { PageModel } from '../../models/page/pageModel'
import { environment } from 'projects/back-office/src/environments/environment'

const RESOURCE = '/page'

@Injectable({
  providedIn: 'root',
})
export class PageControllerService {
  constructor(private http: HttpClient) {}

  public createPages(pages: PageModel[]) {
    return this.http.post(environment.apiBaseUrl + RESOURCE + '/create', pages)
  }

  public getPages() {
    return this.http.get(environment.apiBaseUrl + RESOURCE)
  }

  public updatePages(pages: PageModel[]) {
    return this.http.put(environment.apiBaseUrl + RESOURCE + '/update', pages)
  }
}
