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
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './SafePipe'
import {TempConverterPipe} from './home-content/temp-convertor.pipe';
import { InfocardComponent } from './infocard/infocard.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { DistrictDialogeComponent } from './district-dialoge/district-dialoge.component';
import { RegsterFormComponent } from './regster-form/regster-form.component';
import { AboutPageComponent } from './about-page/about-page.component';



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
    HomeContentComponent,
    InfocardComponent,
    DistrictDialogeComponent,
    RegsterFormComponent,
    AboutPageComponent
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
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
