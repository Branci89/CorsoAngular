import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { ListapersoneComponent } from './component/listapersone/listapersone.component';
import { AddPersonaComponent } from './component/add-persona/add-persona.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ListapersoneComponent,
    AddPersonaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
