import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfilePictureComponent } from './profile-picture/profile-picture.component'
import { NavigationComponent } from './navigation/navigation.component'
import { LoaderComponent } from './loader/loader.component'

@NgModule({
  declarations: [ProfilePictureComponent, NavigationComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [ProfilePictureComponent, NavigationComponent, LoaderComponent],
})
export class ComponentsModule {}
