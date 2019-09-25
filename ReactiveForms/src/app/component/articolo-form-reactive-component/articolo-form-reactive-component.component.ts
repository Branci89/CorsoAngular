import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Articolo } from 'src/app/model/articolo';

@Component({
  selector: 'app-articolo-form-reactive-component',
  templateUrl: './articolo-form-reactive-component.component.html',
  styleUrls: ['./articolo-form-reactive-component.component.css']
})
export class ArticoloFormReactiveComponent {
  @Output() submitF = new EventEmitter<Articolo>();
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      txtTitolo: new FormControl(),
      txtAutore: new FormControl(),
      txtTesto: new FormControl()
    });
  }


  visualizzaArticolo() {
    console.log(this.myForm.controls["txtTitolo"].value);
    console.log(this.myForm.controls["txtAutore"].value);
    console.log(this.myForm.controls["txtTesto"].value);
 }
} 