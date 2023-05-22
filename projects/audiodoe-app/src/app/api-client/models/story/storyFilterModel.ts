import { FilterModel } from '../generic/filterModel'
import { ECategory } from '../category/categoryTranslation'

export interface StoryFilterModel extends FilterModel {
  filterValues: {
    category: ECategory | null
  }
}
