import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment';
import { BehaviorSubject, from, map, Observable, Subject, tap } from 'rxjs';

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
    return from(this._http.get(`${this.url}meeting/weeks`)).pipe(
      map( (res) => { 
        return res 
      })
    );
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
