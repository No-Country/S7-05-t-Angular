import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable()

export class AuthenticationService {

  public url;
  private userSubject: BehaviorSubject<Usuario | null>;
  public user: Observable<Usuario | null>;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.url = environment.url;
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  login(apiUrl: string, userName: string, password: string): Observable<any> {
    let body = { usuario: userName, password: password };
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(apiUrl, body, { headers });
  }

  /*login(email: string, password: string) {
    let user = new Usuario();
    if (email === 'teamleader@gmail.com') {
      user = new Usuario(1, password, 'Diaz', 'Micaela', email, 0, 1, 1);
    }
    if (email === 'admin@gmail.com') {
      user = new Usuario(2, password, 'Garcia', 'Javier', email, 1, 0, 1);
    }
    // localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
    console.log(user);
    return user;
  }*/

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this._router.navigate(['/login']);
}

  // isLoggedIn(): boolean {
  //     let authToken = localStorage.getItem('ACCESS_TOKEN');
  //     if (authToken !== null && authToken !== undefined) {
  //       const expiration = localStorage.getItem("EXPIRES_IN");
  //       if (expiration) {
  //         const expiresAt = JSON.parse(expiration);
  //         if (moment().isBefore(moment(expiresAt))) {
  //           return true;
  //         }
  //       }
  //     }
  //     return false
  // }

}
