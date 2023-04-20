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

    getAll(id: string) {
        return this._http.get<Grupo[]>(`${this.url}users/teamLead/teams/${id}`);
    }

    getById(id: string) {
        return this._http.get<Grupo>(`${this.url}users/teamLead/${id}`);
    }

    update(id: string, params: any) {
        return this._http.put(`${this.url}users/teamLead/${id}`, params);
    }

    delete(id: string) {
        return this._http.delete(`${this.url}users/teamLead/${id}`);
    }

}