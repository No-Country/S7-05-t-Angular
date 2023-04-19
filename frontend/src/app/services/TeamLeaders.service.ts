import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import * as moment from "moment";
import { TeamLeader } from '../models/TeamLeader'
@Injectable()
export class TeamLeadersService {

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
        return this._http.get<TeamLeader[]>(`${this.url}admin/teamLeaders`);
    }

    getById(id: string) {
        return this._http.get<TeamLeader>(`${this.url}admin/teamLeader/${id}`);
    }

    update(id: string, params: any) {
        return this._http.put(`${this.url}/admin/teamLeader${id}`, params);
    }

    delete(id: string) {
        return this._http.delete(`${this.url}/admin/teamLeader/${id}`);
    }

}