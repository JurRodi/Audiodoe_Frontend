import { InteractionModel } from '../interaction/interactionModel'
import { EPageType } from './pageTypes'

export interface PageModel {
  pageNumber: number
  backgroundImage: string | null
  backgroundColor: string | null
  animations: Animation[] | null
  choicePath: string
  choiceQuestion: string | null
  choices: string[] | null
  choiceImage1: string | null
  choiceImage2: string | null
  choiceSplit: boolean
  instructionsTitle: string | null
  audio: string
  text: string
  pageType: EPageType
  storyId: string
  interaction: InteractionModel | null

  audioFileName?: string
  animationFileName?: string
  hasPageNumberChanged?: boolean
  choiceImage1FileName?: string
  choiceImage2FileName?: string
  startInteraction?: boolean
  bgImageFileName?: string
  clickableFileName?: string
}

export interface Animation {
  filename: string
  position: string | null
}
