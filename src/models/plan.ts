import {Salle} from "./salle";
export class Plan {
  id: number;
  site: string;
  batiment: string;
  etage: string;
  url: string;
  salles?: Salle[];
}
