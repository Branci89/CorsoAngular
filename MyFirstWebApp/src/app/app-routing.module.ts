import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { ListapersoneComponent } from './components/listapersone/listapersone.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'crea-persona' },
  { path: 'crea-persona', component: AddPersonaComponent },
  { path: 'listapersone', component: ListapersoneComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
