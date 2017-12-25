import { Injectable } from '@angular/core';
import {Salle} from "../models/salle";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'



@Injectable()
export class SalleService {
  
  url = 'https://kia-locator-ws.herokuapp.com';

  constructor(private http: Http) {
  }

  ajouterSalle(salle:Salle): Observable<Salle> {

    return this.http.post(this.url + '/salles', salle)
      .map((result: Response) => result.json());
  }

  modifierSalle(salle:Salle): void {
    this.http.put(this.url + '/salles/' + salle.id, salle);
  }

  supprimerSalle(id:number): void {
    this.http.delete(this.url + '/salles/' + id);
  }
}
