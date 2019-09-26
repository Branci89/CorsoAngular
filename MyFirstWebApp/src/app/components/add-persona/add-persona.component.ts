import { Component, OnInit, Input } from '@angular/core';
import { PersonaServiceService } from 'src/app/services/persona-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  @Input() personaDetail = {id:0, nome: '', cognome:'', email: '', cf: '',img:'', isFollowed: false }
  
  constructor(
      public restApi: PersonaServiceService,
      public router: Router
    ) { }

  ngOnInit() {}

  addPersona() {
    this.restApi.createPersona(this.personaDetail).subscribe((data: {}) => {
      this.router.navigate(['/listapersone']);
    })
  }

}
