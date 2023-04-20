import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import * as moment from "moment";
import { BehaviorSubject, catchError, from, map, Observable, Subject, tap } from 'rxjs';
import { Usuario } from '../models/Usuario'

@Injectable()

export class AuthenticationService {

  public url;
  private userSubject!: BehaviorSubject<Usuario | null>;
  public user!: Observable<Usuario | null>;

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
    const user = localStorage.getItem('user');
    if (user && typeof user === 'string') {
      this.userSubject = new BehaviorSubject(JSON.parse(user));
      this.user = this.userSubject.asObservable();
    }

  }
  public get userValue() {
    return this.userSubject.value;
  }

  loginAdmin(email: string, password: string) {
    let params = JSON.stringify({ email: email, password: password });
    return from(this._http.post(this.url + 'login/admin', params, this.httpOptions)).pipe(
      map((res) => {
        let response = JSON.parse(JSON.stringify(res));
        if (response.usuario) {
          let usuario = response.usuario;
          let user = new Usuario(
            usuario.id,
            '',
            usuario.name.split(' ')[1],
            usuario.name.split(' ')[0],
            usuario.email,
            1,
            0,
            1
          );
          localStorage.setItem('user', JSON.stringify(user));
          // this.userSubject.next(user);
          localStorage.setItem("ACCESS_TOKEN", response.accessToken);
          const expiresAt = moment().add(response.expiresIn, 'second');
          localStorage.setItem("EXPIRES_IN", JSON.stringify(expiresAt.valueOf()));
          return user;
        }
        return null

      }
      ));
  }

  loginTeamLeader(email: string, password: string) {
    let params = JSON.stringify({ email: email, password: password });
    return from(this._http.post(this.url + 'login/teamleader', params, this.httpOptions)).pipe(
      map((res) => {
        let response = JSON.parse(JSON.stringify(res));
        if (response.usuario) {
          let usuario = response.usuario;
          let user = new Usuario(
            usuario.id,
            '',
            usuario.name.split(' ')[1],
            usuario.name.split(' ')[0],
            usuario.email,
            0,
            1,
            1
          );
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          localStorage.setItem("ACCESS_TOKEN", response.accessToken);
          const expiresAt = moment().add(response.expiresIn, 'second');
          localStorage.setItem("EXPIRES_IN", JSON.stringify(expiresAt.valueOf()));
          return user;
        }
        return null

      }
      ));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this._router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('ACCESS_TOKEN');
    if (authToken !== null && authToken !== undefined) {
      const expiration = localStorage.getItem("EXPIRES_IN");
      if (expiration) {
        const expiresAt = JSON.parse(expiration);
        if (moment().isBefore(moment(expiresAt))) {
          return true;
        }
      }
    }
    return false
  }

}
