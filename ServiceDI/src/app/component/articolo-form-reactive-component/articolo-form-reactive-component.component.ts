import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Articolo } from 'src/app/model/articolo';

@Component({
  selector: 'app-articolo-form-reactive-component',
  templateUrl: './articolo-form-reactive-component.component.html',
  styleUrls: ['./articolo-form-reactive-component.component.css']
})
export class ArticoloFormReactiveComponent {
  /*
  Visual Studio Code on Windows - Shift + Alt + F

  Il metodo group() di FormBuilder ci consente di creare un’istanza di 
  FormGroup all’interno del quale abbiamo definito i soliti tre controlli.
  */
 
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      txtTitolo: ["", [Validators.required,
      Validators.maxLength(10)]
      ],
      txtAutore: ["", [Validators.required,
      Validators.maxLength(11)]
      ],
      txtTesto: ["", [Validators.required,
      Validators.minLength(12),
      Validators.maxLength(5000)]
      ]
    });
  }
  visualizzaArticolo() {
    console.log(this.myForm.controls["txtTitolo"].value);
    console.log(this.myForm.controls["txtAutore"].value);
    console.log(this.myForm.controls["txtTesto"].value);
  }
}


