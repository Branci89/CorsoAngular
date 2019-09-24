import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppGG2';

  myPersone: Array<Persona> = new Array<Persona>();
  
  
  constructor(){
    
  }

  stampaSimpons(){
     this.myPersone = [
      {nome: "HOmer",cognome: "Simpson", cf: "hmrssdh", email: "HOMER@HOMER", img: "./assets/simp1.jpg"},
      {nome: "Lisa",cognome: "Simpson", cf: "liseygdy", email: "lisa@HOMER", img: "./assets/lisa.jpg"},
      {nome: "bart",cognome: "Simpson", cf: "baeruheer", email: "bart@HOMER", img: "./assets/bart.jpg"},
      {nome: "Marge",cognome: "Simpson", cf: "mmanna", email: "marge@HOMER", img: "./assets/marge.jpg"},
    ]; 
       }
}
