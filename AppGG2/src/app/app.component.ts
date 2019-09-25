import { Component } from '@angular/core';
import { Persona } from './models/persona';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppGG2';
  myPersone : Array<Persona>;
 
  constructor(private _persSvc: PersonaService){
    
  }

  stampaSimpons(){
    this.myPersone = this._persSvc.getPersone();
  }
}
