import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonaComponent } from './component/add-persona/add-persona.component';

const routes: Routes = [
  {path: "inserisci" , component:AddPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
