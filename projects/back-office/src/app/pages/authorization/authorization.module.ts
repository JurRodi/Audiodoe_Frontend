import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthorizationComponent } from './authorization.component'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'

const routes: Routes = [
  {
    path: 'login',
    component: AuthorizationComponent,
  },
]

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AuthorizationModule {}