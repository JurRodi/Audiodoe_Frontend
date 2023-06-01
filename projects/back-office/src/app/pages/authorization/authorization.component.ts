import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../../authentication/authentication.service'
import { first } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  public submitted = false
  public isLoading = false
  public error = ''

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  public get f() {
    return this.loginForm.controls
  }

  public onSubmit(): void {
    this.submitted = true

    if (this.loginForm.invalid) {
      console.log('invalid')
      return
    }

    this.isLoading = true
    this.error = ''
    this.authService
      .login(this.f.email.value!, this.f.password.value!)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/story/create'])
        },
        error: () => {
          this.error = 'Email of wachtwoord is onjuist'
          this.isLoading = false
        },
      })
  }
}
