import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TalksComponent } from './talks/talks.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  {path: 'home',component: HomepageComponent},
  {path: 'speakers',component: SpeakersComponent},
  {path: 'talks',component: TalksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
