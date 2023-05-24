import { Injectable } from '@angular/core'
import {
  CategoryTranslationMap,
  ECategory,
} from '../../models/category/categoryTranslation'

@Injectable({
  providedIn: 'root',
})
export class CategoryControllerService {
  constructor() {}

  public getCategories() {
    return [
      {
        id: 1,
        value: ECategory.Animals,
        name: CategoryTranslationMap[ECategory.Animals],
        imgPath: 'assets/icons/animals.svg',
      },
      {
        id: 2,
        value: ECategory.Feelings,
        name: CategoryTranslationMap[ECategory.Feelings],
        imgPath: 'assets/icons/feelings.svg',
      },
      {
        id: 3,
        value: ECategory.Family,
        name: CategoryTranslationMap[ECategory.Family],
        imgPath: 'assets/icons/family.svg',
      },
      {
        id: 4,
        value: ECategory.Party,
        name: CategoryTranslationMap[ECategory.Party],
        imgPath: 'assets/icons/party.svg',
      },
      {
        id: 5,
        value: ECategory.History,
        name: CategoryTranslationMap[ECategory.History],
        imgPath: 'assets/icons/history.svg',
      },
      {
        id: 6,
        value: ECategory.Comedy,
        name: CategoryTranslationMap[ECategory.Comedy],
        imgPath: 'assets/icons/humor.svg',
      },
      {
        id: 7,
        value: ECategory.Sports,
        name: CategoryTranslationMap[ECategory.Sports],
        imgPath: 'assets/icons/sport.svg',
      },
      {
        id: 8,
        value: ECategory.Adventure,
        name: CategoryTranslationMap[ECategory.Adventure],
        imgPath: 'assets/icons/adventure.svg',
      },
    ]
  }
}
