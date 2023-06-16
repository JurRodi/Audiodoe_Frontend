import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfilePictureComponent } from './profile-picture/profile-picture.component'
import { NavigationComponent } from './navigation/navigation.component'
import { LoaderComponent } from './loader/loader.component'
import { PageDisplayComponent } from './page-display/page-display.component'
import { PageChoiceComponent } from './page-choice/page-choice.component'
import { PageInteractionComponent } from './page-interaction/page-interaction.component'
import { InteractionColorizeComponent } from './interaction-colorize/interaction-colorize.component'

@NgModule({
  declarations: [
    ProfilePictureComponent,
    NavigationComponent,
    LoaderComponent,
    PageDisplayComponent,
    PageChoiceComponent,
    PageInteractionComponent,
    InteractionColorizeComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProfilePictureComponent,
    NavigationComponent,
    LoaderComponent,
    PageDisplayComponent,
    PageChoiceComponent,
    PageInteractionComponent,
    InteractionColorizeComponent,
  ],
})
export class ComponentsModule {}
