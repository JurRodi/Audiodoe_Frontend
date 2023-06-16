import { ClickableModel } from '../clickable/clickableModel'
import { EInteractionType } from './interactionTypes'

export interface InteractionModel {
  type: EInteractionType
  backgroundImage: string
  backgroundColor: string
  clickable: ClickableModel
}
