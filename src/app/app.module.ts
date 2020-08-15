import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { NewscardsComponent } from './newscards/newscards.component';
import { HomeContentComponent } from '././home-content/home-content.component';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './SafePipe'
import {TempConverterPipe} from './home-content/temp-convertor.pipe';
import { Content } from '@angular/compiler/src/render3/r3_ast';


var firebaseConfig = {
  apiKey: "AIzaSyDKkVI2iH83Naw3uS8npFS-45aR5Mi4PDM",
  authDomain: "santhigiridm.firebaseapp.com",
  databaseURL: "https://santhigiridm.firebaseio.com",
  projectId: "santhigiridm",
  storageBucket: "santhigiridm.appspot.com",
  messagingSenderId: "309003232518",
  appId: "1:309003232518:web:38ac96b93cc7b843b32a87"
};

@NgModule({
  declarations: [
    AppComponent,
    NewscardsComponent,
    TempConverterPipe,
    SafePipe,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
