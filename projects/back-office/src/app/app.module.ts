import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoryComponent } from './pages/story/story.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthenticationInterceptor } from './authentication/authentication.interceptor'

@NgModule({
  declarations: [AppComponent, StoryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
