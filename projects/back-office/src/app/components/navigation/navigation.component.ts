import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private router: Router) {}

  public navigateToStories(): void {
    this.router.navigate(['/stories'])
  }

  public navigateToCreateStory(): void {
    this.router.navigate(['/story/create'])
  }
}
