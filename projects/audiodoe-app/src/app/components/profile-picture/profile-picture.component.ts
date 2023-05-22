import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent {
  @Input() image?: string
  @Input() size: 'small' | 'medium' | 'large' = 'medium'
  @Input() opacity: 'light' | 'dark' | 'none' = 'none'
}
