import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ListapersoneComponent } from './components/listapersone/listapersone.component';
import { AddPersonaComponent } from './components/add-persona/add-persona.component';
import { FormsModule } from '@angular/forms';
import { PersonaServiceService } from './services/persona-service.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ListapersoneComponent,
    AddPersonaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
