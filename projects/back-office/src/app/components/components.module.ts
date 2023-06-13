import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from './loader/loader.component'
import { PageDisplayComponent } from './page-display/page-display.component'
import { PageChoiceComponent } from './page-choice/page-choice.component'

@NgModule({
  declarations: [LoaderComponent, PageDisplayComponent, PageChoiceComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, PageDisplayComponent, PageChoiceComponent],
})
export class ComponentsModule {}
