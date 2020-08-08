import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
