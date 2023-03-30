import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import * as moment from "moment";
import { BehaviorSubject, catchError, from, map, Observable, tap } from 'rxjs';

@Injectable()
export class AuthenticationService {

    public url;

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
    }

    login(userName: string, password: string): Observable<any> {
        
        let params = JSON.stringify({ usuario: userName, password: password });
        return from(this._http.post(this.url + 'login', params, this.httpOptions)).pipe(
            map((res) => res
        ));
          
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