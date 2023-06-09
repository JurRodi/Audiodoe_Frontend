import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from './loader/loader.component'
import { PageDisplayComponent } from './page-display/page-display.component'

@NgModule({
  declarations: [LoaderComponent, PageDisplayComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, PageDisplayComponent],
})
export class ComponentsModule {}
