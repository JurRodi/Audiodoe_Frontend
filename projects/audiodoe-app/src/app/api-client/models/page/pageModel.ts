import { EPageType } from './pageTypes'

export interface PageModel {
  pageNumber: number
  backgroundImage: string
  backgroundColor: string
  animations: string[]
  audio: string
  text: string
  pageType: EPageType
  storyId: string
}
