import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SallePage } from '../pages/salle/sallePage'
import {PlanService} from "../services/plan.service";
//import { SALLES } from './bo/salles';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SallePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SallePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PlanService]
})
export class AppModule {}
