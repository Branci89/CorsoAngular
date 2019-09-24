import { Component, OnInit, Input } from '@angular/core';
import { Articolo } from 'src/app/models/articolo';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent  {
  //si può spostare la logica del componente o al padre (app-component) o al figlio. Un componente può prendere in input un articolo e prendersi 
  //in carico di disegnarlo, opppure, può recuperare un model e disegnarsi, poi questo componente, avrà "vita propria" nell'applicazione
  
 /*  articolo: Articolo = new Articolo;
  constructor() {
    this.articolo.titolo = "la bella vita";
    this.articolo.autore ="io";
    this.articolo.titolo = "nel mezzo del cammin di nostra vita";
   } */

    @Input() articolo: Articolo;
    
}
