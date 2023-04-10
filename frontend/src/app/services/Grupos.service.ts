import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import * as moment from "moment";
import { BehaviorSubject, catchError, from, map, Observable, Subject, tap } from 'rxjs';
import { Grupo } from '../models/Grupo'
@Injectable()
export class GruposService {

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

    getAll() {
        return this._http.get<Grupo[]>(`${this.url}/grupos`);
    }

    getById(id: string) {
        return this._http.get<Grupo>(`${this.url}/grupos/${id}`);
    }

    update(id: string, params: any) {
        return this._http.put(`${this.url}/grupos/${id}`, params);
    }

    delete(id: string) {
        return this._http.delete(`${this.url}/grupos/${id}`);
    }

}