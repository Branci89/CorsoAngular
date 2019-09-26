import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TalksComponent } from './talks/talks.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
   declarations: [
      AppComponent,
      HomepageComponent,
      TalkDetailsComponent,
      SpeakersComponent,
      TalksComponent,
      SpeakerDetailsComponent,
      HeaderComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
