import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    this.login('test@audiodoe.com', 'Welkom01!').subscribe((res: any) => {
      this.setSession(res)
    })
  }

  private login(email: string, password: string) {
    return this.http.post(environment.apiBaseUrl + '/account/login', {
      email,
      password,
    })
  }

  private setSession(authResult: any) {
    localStorage.setItem('id_token', authResult.token)
  }
}
