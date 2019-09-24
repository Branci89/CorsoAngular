import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  @Input() persons : Array<Persona>
  @Output() scrivi = new EventEmitter();
  stampato: boolean = false;
  MessStampa : string = "Stampa i Simpsons!";
  constructor() {
   }

   faiAzione(){
     this.scrivi.emit();
     this.stampato = !this.stampato;
    if(this.stampato) this.MessStampa = "Cancella i Simpons";
    else this.MessStampa = "Stampa i Simpsons!";
   }


}
