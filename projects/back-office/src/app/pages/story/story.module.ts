import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateComponent } from './create/create.component'
import { RouterModule, Routes } from '@angular/router'
import { CreatePagesComponent } from './create-pages/create-pages.component'
import { SliderComponent } from './create-pages/slider/slider.component'
import { PageComponent } from './create-pages/page/page.component'
import { EditPageComponent } from './create-pages/edit-page/edit-page.component'
import { AddPageComponent } from './create-pages/add-page/add-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { OverviewComponent } from './overview/overview.component'

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create-pages/:storyId', component: CreatePagesComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    CreateComponent,
    CreatePagesComponent,
    SliderComponent,
    PageComponent,
    EditPageComponent,
    AddPageComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class StoryModule {}
