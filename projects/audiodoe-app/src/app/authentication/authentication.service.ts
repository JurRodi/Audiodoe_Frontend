import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { map } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public token = localStorage.getItem('id_token') || null

  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, password: string) {
    return this.http
      .post(environment.apiBaseUrl + '/account/login', {
        email,
        password,
      })
      .pipe(
        map((res: any) => {
          this.setSession(res)
          return res
        })
      )
  }

  private setSession(authResult: any) {
    localStorage.setItem('id_token', authResult.token)
  }

  public logout(): void {
    localStorage.removeItem('id_token')
    this.router.navigate(['/login'])
  }
}
