import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Salle } from '../../models/salle';

@Component({
  selector: 'page-salle',
  templateUrl: 'sallePage.html'
})
export class SallePage {

    salle: Salle = new Salle();

    constructor(private navParams: NavParams) {
      if (navParams.get('salle') != null) {
        this.salle = navParams.get('salle');
      }
  }
}
