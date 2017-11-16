import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Salle } from '../../models/salle';
import { SallePage } from '../salle/sallePage'
import { ModalController } from 'ionic-angular';
import {PlanService} from "../../services/plan.service";
import {Plan} from "../../models/plan";
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plans: Plan[];
  salles: Salle[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private planService: PlanService) {
    this.getPlans();
  }

  itemSelected(salle:Salle){
    this.navCtrl.push(SallePage, { salle: salle})
  }

    presentModal() {
    let modal = this.modalCtrl.create(SallePage);
    modal.present();
  }

  getPlans(): void {
    this.planService.getPlans().subscribe(response => this.plans = response);
    console.log('plans: ',this.plans);
  }

  getSitesList(): string[] {
    const plansToReturn: Plan[] = _.uniqBy(this.plans, 'site');
    return plansToReturn.map(function(plan) {
      return plan.site;
    });
  }

  getBatimentsList(site: string): string[] {
    let batimentsToReturn: Plan[] = this.plans.filter(plan => plan.site === site);
    batimentsToReturn = _.uniqBy(batimentsToReturn, 'batiment');
    return batimentsToReturn.map(function(plan) {
      return plan.batiment;
    });
  }

  getEtagesList(site: string, batiment: string): string[] {
    let batimentsToReturn: Plan[] = this.plans.filter(plan => plan.site === site
                                                      && plan.batiment === batiment);
    return batimentsToReturn.map(function(plan) {
      return plan.etage;
    });
  }

  getPlanUrl(site: string, batiment: string, etage: string): string {
    const etageToReturn: Plan = this.plans.find(plan => plan.site === site
                                                        && plan.batiment === batiment
                                                        && plan.etage === etage);
    if (etageToReturn == null) {
      return '';
    }
    else {
      return etageToReturn.url;
    }
  }
}
