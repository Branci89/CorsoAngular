import { Component, OnInit, Input } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';

@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})
export class ListaArticoliComponent implements OnInit {
@Input() listaArt : Array<Articolo>=[];

  constructor() { }

  ngOnInit() {
  }

}
