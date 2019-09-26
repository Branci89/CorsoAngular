import { Component, Input, OnInit} from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent   {
 

  @Input() person : Persona
 
  like: boolean = false;
  likeBtn: string ="Like!";
  constructor() {
   }

   
  
   likeFn(){
     this.person.isFollowed = !this.person.isFollowed;
  }


}
