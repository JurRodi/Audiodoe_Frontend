import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { StoryOverviewComponent } from './overview/story-overview.component'
import { ComponentsModule } from '../../components/components.module'
import { StoryDetailComponent } from './detail/story-detail.component'
import { PageComponent } from './page/page.component'

const routes: Routes = [
  { path: '', component: StoryOverviewComponent },
  { path: ':id', component: StoryDetailComponent },
  { path: ':id/:pageNumber', component: PageComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  declarations: [StoryOverviewComponent, StoryDetailComponent, PageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
})
export class StoryModule {}