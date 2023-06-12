import { EPageType } from './pageTypes'

export interface PageModel {
  pageNumber: number
  backgroundImage: string | null
  backgroundColor: string | null
  animations: Animation[] | null
  choicePath: string
  choiceQuestion: string | null
  choices: string[] | null
  choiceImages: string[] | []
  choiceSplit: boolean
  instructionsTitle: string | null
  audio: string
  text: string
  pageType: EPageType
  storyId: string

  audioFileName?: string
  animationFileName?: string
  hasPageNumberChanged?: boolean
}

export interface Animation {
  fileName: string
  position: string | null
}
