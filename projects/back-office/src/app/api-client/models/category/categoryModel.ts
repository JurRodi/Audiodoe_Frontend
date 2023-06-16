import { ECategory } from './categoryTranslation'

export interface CategoryModel {
  id: number
  name: ECategory
  imgPath: string

  translatedName?: string
}
