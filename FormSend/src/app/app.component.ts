import { Component } from '@angular/core';
import { Articolo } from './model/articolo';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'app works!'; 
  myArticolo : Articolo; 
  //elencoArticoli: Articolo [] = [];
  elencoArticoli : Array<Articolo>=[];
  constructor() { 
    this.myArticolo = { 
      titolo: "Creare componenti Angular", 
      autore: "Massio Roy", 
      testo: "Creare componenti con Angular  è molto semplice." ,
      numApprezzamenti :0
      
    }; 
  }
  mostraMessaggioRingraziamento(numApprezzamenti) {  
    alert("Grazie per aver espresso il like! \n Il numero di apprezzamenti raggiunti è " + numApprezzamenti); 

  } 
  addArticolo(articolo: Articolo) {
    this.elencoArticoli.push(articolo)
  }
} 
