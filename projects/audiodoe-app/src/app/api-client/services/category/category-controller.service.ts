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
        value: ECategory.party,
        name: CategoryTranslationMap[ECategory.party],
        imgPath: 'assets/icons/party.svg',
      },
      {
        id: 5,
        value: ECategory.history,
        name: CategoryTranslationMap[ECategory.history],
        imgPath: 'assets/icons/history.svg',
      },
      {
        id: 6,
        value: ECategory.comedy,
        name: CategoryTranslationMap[ECategory.comedy],
        imgPath: 'assets/icons/humor.svg',
      },
      {
        id: 7,
        value: ECategory.sports,
        name: CategoryTranslationMap[ECategory.sports],
        imgPath: 'assets/icons/sport.svg',
      },
      {
        id: 8,
        value: ECategory.adventure,
        name: CategoryTranslationMap[ECategory.adventure],
        imgPath: 'assets/icons/adventure.svg',
      },
    ]
  }
}
