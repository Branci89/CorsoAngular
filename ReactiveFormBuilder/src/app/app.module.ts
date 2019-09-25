import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './component/articolo/articolo.component';
import { ArticoloFormComponent } from './component/articolo-form/articolo-form.component';
import { ListaArticoliComponent } from './component/lista-articoli/lista-articoli.component';
import { ArticoloFormReactiveComponent } from './component/articolo-form-reactive-component/articolo-form-reactive-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
   
    ArticoloFormComponent,
   ArticoloFormReactiveComponent,
    ListaArticoliComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
