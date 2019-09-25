import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private listaPersone: Array<Persona>;
  constructor() {
    this.listaPersone = [
      {nome: "Homer",cognome: "Simpson", cf: "hmrssdh", email: "HOMER@HOMER", img: "./assets/simp1.jpg"},
      {nome: "Lisa",cognome: "Simpson", cf: "liseygdy", email: "lisa@HOMER", img: "./assets/lisa.jpg"},
      {nome: "bart",cognome: "Simpson", cf: "baeruheer", email: "bart@HOMER", img: "./assets/bart.jpg"},
      {nome: "Marge",cognome: "Simpson", cf: "mmanna", email: "marge@HOMER", img: "./assets/marge.jpg"},
      {nome: "Homer",cognome: "Simpson", cf: "hmrssdh", email: "HOMER@HOMER", img: "./assets/simp1.jpg"},
      {nome: "Lisa",cognome: "Simpson", cf: "liseygdy", email: "lisa@HOMER", img: "./assets/lisa.jpg"},
      {nome: "bart",cognome: "Simpson", cf: "baeruheer", email: "bart@HOMER", img: "./assets/bart.jpg"},
      {nome: "Marge",cognome: "Simpson", cf: "mmanna", email: "marge@HOMER", img: "./assets/marge.jpg"}
    ]; 
   }

   getPersone() : Array<Persona> {
    console.log("SERVICE: ritorno la lista - getPersona()");
    return this.listaPersone;
   }

   addPersona(_persona: Persona) {
     console.log("SERVICE: sto inserendo la persona - addPersona()");
     this.listaPersone.push(_persona);
     console.log("SERVICE: inserita! - addPersona()");
   };
}
