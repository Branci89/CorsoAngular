import { Component } from '@angular/core';
import { Articolo } from './model/articolo';
import { FormGroup } from '@angular/forms';
import { ArticoliService } from './service/articoli.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  
})
export class AppComponent { 
  title = 'Articoli Tecnici';
  elencoArticoli;
  constructor(private articoliService: ArticoliService) {
    this.elencoArticoli = articoliService.getArticoli();
  }
  addArticolo(articolo) {
    console.log('sono in add articolo richiamo Service')
    this.articoliService.addArticolo(articolo);
  }
}