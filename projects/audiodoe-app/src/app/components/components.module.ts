import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfilePictureComponent } from './profile-picture/profile-picture.component'
import { NavigationComponent } from './navigation/navigation.component'
import { LoaderComponent } from './loader/loader.component'
import { PageDisplayComponent } from './page-display/page-display.component'

@NgModule({
  declarations: [
    ProfilePictureComponent,
    NavigationComponent,
    LoaderComponent,
    PageDisplayComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProfilePictureComponent,
    NavigationComponent,
    LoaderComponent,
    PageDisplayComponent,
  ],
})
export class ComponentsModule {}
