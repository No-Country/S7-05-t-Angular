import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
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

    getAllGroups(){
        return this._http.get<Grupo[]>(`${this.url}team/all`);
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