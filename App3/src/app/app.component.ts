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

  myarticolo: Articolo; //qui abbiamo dovuto dichiarare il fatto che questo componente, ha un articolo.
  myArray : Array<string>;
  
  //per comodità, nel costruttore, abbiamo inziializzato l'oggetto, questa parte, può essere spostata in articolo.component.ts
  constructor() {
     this.myarticolo = {
      testo : "nel mezzo del cammin.",
      autore : "albertp",
      titolo : "la bella vita",
      numApprezzamenti : 0
    }; 
    this.myArray = ['ciao','bella','cane','gatto','lupo','elefante'];
   }

   ringrazia(num){
     alert( "Grazie! hai messo il like n° "+num );
   }
   
}
