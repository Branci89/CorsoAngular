import { Component, Input, OnInit} from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent   {

  @Input() person : Persona
  
  like: boolean = false;
  likeBtn: string ="Like!";
  tmp: any = {};

  constructor(
    public apiRest: PersonaServiceService,
    public router: Router) 
    {   }
  
   likeFn(){
     this.person.isFollowed = !this.person.isFollowed;
     this.apiRest.updatePersona(this.person.id, this.person).subscribe(data => {
      this.router.navigate(['/listapersone'])
    })
   }

   deletePerson(_id){
     this.apiRest.deletePersona(_id).subscribe(data=>{
       this.router.navigate(['/'])
     })
   }
    
}


