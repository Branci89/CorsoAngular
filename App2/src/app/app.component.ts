import { Component } from '@angular/core';
import { Articolo }  from 'src/app/models/articolo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stampiamo una Tabella';

  nome :string = 'Claudio';
  cognome :string = 'Branci';
  eta: number = 30;

  items: Array<string> = new Array("Claudio","Bruno","Alfredo","Emilio","Antonio","Nadia","Federica","Nino");

  myarticolo: Articolo = new Articolo; //qui abbiamo dovuto dichiarare il fatto che questo componente, ha un articolo.

  //per comodità, nel costruttore, abbiamo inziializzato l'oggetto, questa parte, può essere spostata in articolo.component.ts
  constructor() {
    this.myarticolo.titolo = "la bella vita";
    this.myarticolo.autore ="Alberto";
    this.myarticolo.titolo = "nel mezzo del cammin di nostra vita";
   }

}
