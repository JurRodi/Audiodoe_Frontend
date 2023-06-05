import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { environment } from 'projects/back-office/src/environments/environment'

const RESOURCE = '/category'

@Injectable({
  providedIn: 'root',
})
export class CategoryControllerService {
  constructor(private http: HttpClient) {}

  public getCategories() {
    return lastValueFrom(this.http.get(environment.apiBaseUrl + RESOURCE))
  }
}
