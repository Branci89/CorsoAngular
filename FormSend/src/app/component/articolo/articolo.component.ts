import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';

@Component({ 
  selector: 'articolo', 
  templateUrl: 'articolo.component.html', 
  styleUrls: ['articolo.component.css'] 
}) 
export class ArticoloComponent  implements OnInit , OnChanges{ 
  @Input() articolo: Articolo; 
  @Output() like = new EventEmitter<number>(); 
  constructor() {} 

  
  ngOnInit() { 
    console.log("Il componente è in fase di inizializzazione!"); 
  } 


  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) { 
    console.log("il componente è in changes....")
    if (changes["articolo"] && changes["articolo"].currentValue.testo) { 
      let testoArticolo = changes["articolo"].currentValue.testo; 
      changes["articolo"].currentValue.testo = testoArticolo.replace("è", "\xE9") ; 
    } 
  } 


  
  incrementaApprezzamenti() { 
    this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1; 
    this.like.emit(this.articolo.numApprezzamenti); 
  } 

} 
