import { Component, Output, EventEmitter } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';
 

@Component({
  selector: 'app-articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent  {

  @Output() submit = new EventEmitter<Articolo>();
  model : Articolo;
  constructor() {
    this.model = new Articolo();
  }

 
  inviaArticolo() {
    this.submit.emit(this.model);
    this.model = new Articolo();
  }

}
