import { EPageType } from './pageTypes'

export interface PageModel {
  pageNumber: number
  backgroundImage: string | null
  backgroundColor: string | null
  animations: string[] | null
  choicePath: string
  choiceQuestion: string | null
  choices: string[] | null
  choiceImages: string[] | null
  choiceSplit: boolean
  instructionsTitle: string | null
  audio: string
  text: string
  pageType: EPageType
  storyId: string
}
