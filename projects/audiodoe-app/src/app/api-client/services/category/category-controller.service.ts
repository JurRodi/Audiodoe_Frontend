import { Injectable } from '@angular/core'
import {
  CategoryTranslationMap,
  ECategory,
} from '../../models/category/categoryTranslation'
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { environment } from 'projects/audiodoe-app/src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CategoryControllerService {
  constructor(private http: HttpClient) {}

  public getCategories() {
    return lastValueFrom(this.http.get(environment.apiBaseUrl + '/category'))
  }
}
