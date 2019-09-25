import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './component/articolo/articolo.component';
import { ArticoloFormComponent } from './component/articolo-form/articolo-form.component';
import { ListaArticoliComponent } from './component/lista-articoli/lista-articoli.component';
import { ArticoloFormReactiveComponent } from './component/articolo-form-reactive-component/articolo-form-reactive-component.component';
import { ArticoliService } from './service/articoli.service';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
   
    ArticoloFormComponent,
   ArticoloFormReactiveComponent,
    ListaArticoliComponent,
    CustomPipePipe,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ArticoliService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
