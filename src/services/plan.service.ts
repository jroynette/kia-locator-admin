import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {Http, Response} from '@angular/http';
import {Plan} from "../models/plan";


@Injectable()
export class PlanService {

  url = 'https://kia-locator-ws.herokuapp.com/plans';

  constructor(private http: Http) {
  }

  getPlans(): Observable<Plan[]> {
    return this.http.get(this.url).map((result: Response) => result.json());
  }

}
