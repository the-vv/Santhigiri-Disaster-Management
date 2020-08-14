import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewscardsComponent } from './newscards/newscards.component';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeContentComponent } from './home-content/home-content.component';

import { HttpClientModule } from '@angular/common/http';

var firebaseConfig = {
  apiKey: "AIzaSyCRAE1JLUe2Nt8sWFo5_RhVuId_2vMgrZM",
  authDomain: "registration-91b64.firebaseapp.com",
  databaseURL: "https://registration-91b64.firebaseio.com",
  projectId: "registration-91b64",
  storageBucket: "registration-91b64.appspot.com",
  messagingSenderId: "444371260564",
  appId: "1:444371260564:web:0bbccb6e41cf5fe775d081"
};

@NgModule({
  declarations: [
    AppComponent,
    NewscardsComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
