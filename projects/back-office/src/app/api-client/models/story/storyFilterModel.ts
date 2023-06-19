import { ECategory } from '../category/categoryTranslation'
import { FilterModel } from '../generic/filterModel'

export interface StoryFilterModel extends FilterModel {
  filterValues: {
    category: ECategory | null
  }
}
