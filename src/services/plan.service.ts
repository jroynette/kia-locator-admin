import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Headers, Response} from '@angular/http';
import {Plan} from "../models/plan";


@Injectable()
export class PlanService {

  constructor(private http: Http) {
  }

  getPlans(): Observable<Plan[]> {

    const url = 'https://kia-locator-ws.herokuapp.com/plans';
    return this.http.get(url).map((result: Response) => result.json());
  }

}
