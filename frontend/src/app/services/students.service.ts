import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public url;

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.url = environment.url;
  }

  getAllStudents() {
    return this._http.get(`${this.url}users/student`);
  }
}
