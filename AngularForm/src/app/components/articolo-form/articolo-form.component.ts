import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';

@Component({
  selector: 'app-articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent {

  model = new Articolo();
  constructor() { }


}
