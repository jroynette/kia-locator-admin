import { Injectable } from '@angular/core';
import {PLANS} from "../mocks/plan.mock";
import {Plan} from "../models/plan";

@Injectable()
export class PlanService {

  // stub
  getPlans(): Plan[] {
    return PLANS;
  }
}
