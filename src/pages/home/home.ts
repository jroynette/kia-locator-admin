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

  presentCreationModal() { 
    let modal = this.modalCtrl.create(SallePage);
    modal.present();
  }

  presentEditionModal(salle: Salle) { 
    this.navCtrl.push(SallePage, {salle: salle});//Promise � g�
  } 
 
  getPlans(): void {
    this.planService.getPlans().subscribe(response => this.plans = response);
  }

  getSitesList(): string[] {
    const plansToReturn: Plan[] = _.uniqBy(this.plans, 'site');
    return plansToReturn.map(function(plan) {
      return plan.site;
    });
  }

  getBatimentsList(site: string): string[] {
    let batimentsToReturn: Plan[] = _.filter(this.plans,{ 'site': site});
    batimentsToReturn = _.uniqBy(batimentsToReturn, 'batiment');
    return batimentsToReturn.map(function(plan) {
      return plan.batiment;
    });
  }

  getEtagesList(site: string, batiment: string): string[] {
    let batimentsToReturn: Plan[] = _.filter(this.plans,{ 'site': site,'batiment':batiment});
    return batimentsToReturn.map(function(plan) {
      return plan.etage;
    });
  }

  getPlanUrl(site: string, batiment: string, etage: string): string {
    const etageToReturn: Plan = _.find(this.plans,{ 'site':site,
                                                        'batiment': batiment,
                                                        'etage': etage});
    if (etageToReturn == null) {
      return '';
    }
    else {
      return etageToReturn.url;
    }
  }
  getPlanSalles(site: string, batiment: string, etage: string): Array<Salle> { 
    let sallesList: Array<Salle> = []; 
 
    const etageToReturn: Plan = _.find(this.plans,{ 'site':site,
    'batiment': batiment,
    'etage': etage}); 
    if (etageToReturn != null && etageToReturn.salles != null) { 
      sallesList = etageToReturn.salles; 
    } 
 
    return sallesList; 
  } 
}
