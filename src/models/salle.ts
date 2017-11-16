import {Photo} from "./photo";
import {Reservation} from "./reservation";
import {Plan} from "./plan";

export class Salle {

  id: number;
  nom: string;
  capactite?: number;
  retro?: boolean;
  visio?: boolean;
  plan?: Plan;
  positionX?: number;
  positionY?: number;
  photos?: Photo[];
  //reservationsJour?: Reservation[];
  // disponible?: boolean; champ calculé?
}
