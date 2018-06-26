//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EliteApi {

  private baseUrl = 'https://elite-schedule-app-i2-7f99f.firebaseio.com/'
  private currrentTourney:any = {};

  constructor(public http: Http) { }


  getTournaments(){
    return new Promise(resolve => {
      this.http
      .get(`${this.baseUrl}/tournaments.json`)
      .subscribe(res => resolve(res.json()));
    })
  }

  getTournamentData(tourneyId) : Observable<any>{
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map(response => {
      this.currrentTourney = response.json();
      return this.currrentTourney;
    })
  }
}
