import { Injectable } from '@angular/core';
import {Salle} from "../models/salle";
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class SalleService {

  constructor(private http: Http) {
  }

  ajouterSalle(salle:Salle): Observable<Salle> {

    const url = 'https://kia-locator-ws.herokuapp.com';

    return this.http.post(url + '/salles', salle)
      .map((result: Response) => result.json());
  }

  modifierSalle(salle:Salle): void {

    const url = 'https://kia-locator-ws.herokuapp.com';
    this.http.put(url + '/salles/' + salle.id, salle);
  }

  supprimerSalle(id:number): void {

    const url = 'https://kia-locator-ws.herokuapp.com';
    this.http.delete(url + '/salles/' + id);
  }
}
