import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class WeeksAndMeetService {
  public url;

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.url = environment.url;
  }

  getAllWeeks() {
    return this._http.get(`${this.url}meeting/weeks`);
  }

  createMeet(data: any) {
    return this._http.post(`${this.url}meeting/create`, data);
  }

  createAttendance(data: any) {
    return this._http.post(`${this.url}meeting/createAttendance`, data);
  }

  createActivity(data:any){
    return this._http.post(`${this.url}meeting/createActivity`, data);
  }
  
}
