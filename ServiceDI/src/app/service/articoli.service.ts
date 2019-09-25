import { Injectable } from '@angular/core';
import { Articolo } from '../model/articolo';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {
  private elencoArticoli: Articolo[];
  constructor() {
    console.log('sono nel servizio...')
    this.elencoArticoli = [{
      titolo: "Creare componenti Angular 2",
      autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    },
    {
      titolo: "Creare servizi Angular 2",
      autore: "Roberto Bianchi",
      testo: "Anche creare servizi con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    }];
  }
  getArticoli(): Articolo[] {
    console.log('sono nel servizio... metood getArticoli')
    return this.elencoArticoli;
  }
  addArticolo(articolo: Articolo) {
    console.log('sono nel servizio... metodoAddArticolo')
    this.elencoArticoli.push(articolo)
  }
}