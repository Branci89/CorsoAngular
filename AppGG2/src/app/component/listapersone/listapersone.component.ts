import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-listapersone',
  templateUrl: './listapersone.component.html',
  styleUrls: ['./listapersone.component.css']
})
export class ListapersoneComponent  {

  @Input() perList: Array<Persona>
  @Output() scrivi = new EventEmitter();
  MessStampa : string = "Stampa i Simpsons!";
  stampato: boolean = false;
  
  constructor() { }

  faiAzione(){
    this.scrivi.emit();
    /* this.stampato = !this.stampato;
   if(this.stampato) this.MessStampa = "Cancella i Simpons";
   else this.MessStampa = "Stampa i Simpsons!"; */
  }



}
