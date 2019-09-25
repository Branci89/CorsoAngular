import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { ListapersoneComponent } from './component/listapersone/listapersone.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ListapersoneComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
