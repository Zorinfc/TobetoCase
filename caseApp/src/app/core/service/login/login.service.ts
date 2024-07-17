import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  token = '';
  username = '';
  password = '';

  login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post('/login', { username, password }, { responseType: 'text' })
      .pipe(
        map((data) => {
          this.parseLogin(data);
          return data;
        })
      );
  }

  logout() {
    this.token = '';
    this.username = '';
    localStorage.clear();
  }

  parseLogin(data: string) {
    let payload = this.parseJwt(data);
    let userName = payload.userName;
    localStorage.setItem('token', data);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .replace(/_/g, '');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  tokenControl() {
    let token = localStorage.getItem('token');
    let payload = this.parseJwt(token!);
    let tarih = payload.exp;
    let now = Date.now() / 1000;
    if (parseInt(tarih!) > now) {
      return true;
    } else return false;
  }
}
