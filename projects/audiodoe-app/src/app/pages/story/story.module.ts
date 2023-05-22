import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { StoryOverviewComponent } from './overview/story-overview.component'
import { ComponentsModule } from '../../components/components.module'

const routes: Routes = [{ path: '', component: StoryOverviewComponent }]

@NgModule({
  declarations: [StoryOverviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
})
export class StoryModule {}
