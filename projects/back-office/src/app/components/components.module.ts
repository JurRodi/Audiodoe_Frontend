import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from './loader/loader.component'
import { PageDisplayComponent } from './page-display/page-display.component'
import { PageChoiceComponent } from './page-choice/page-choice.component'
import { PageInteractionComponent } from './page-interaction/page-interaction.component'
import { InteractionColorizeComponent } from './interaction-colorize/interaction-colorize.component'
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [
    LoaderComponent,
    PageDisplayComponent,
    PageChoiceComponent,
    PageInteractionComponent,
    InteractionColorizeComponent,
    NavigationComponent,
  ],
  imports: [CommonModule],
  exports: [
    LoaderComponent,
    PageDisplayComponent,
    PageChoiceComponent,
    PageInteractionComponent,
    InteractionColorizeComponent,
    NavigationComponent,
  ],
})
export class ComponentsModule {}
