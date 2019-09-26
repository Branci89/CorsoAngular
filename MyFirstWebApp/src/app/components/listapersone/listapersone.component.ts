import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';

@Component({
  selector: 'app-listapersone',
  templateUrl: './listapersone.component.html',
  styleUrls: ['./listapersone.component.css']
})
export class ListapersoneComponent implements OnInit {
  

  perList: any = [];
  @Output() scrivi = new EventEmitter();
  MessStampa : string = "Stampa i Simpsons!";
  stampato: boolean = false;
  
  constructor(
    public restApi: PersonaServiceService) 
    { }
  ngOnInit(): void {
    this.loadPersonas()
  }

  loadPersonas() {
    return this.restApi.getPersonas().subscribe((data: {}) => {
      this.perList = data;
    })
  }




}
