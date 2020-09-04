import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AppComponent } from '../app.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-regster-form',
  templateUrl: './regster-form.component.html',
  styleUrls: ['./regster-form.component.scss']
})
export class RegsterFormComponent implements OnInit {

  
  registerForm: FormGroup;
  public items: Array<any> = [];
  public itemRef: firebase.database.Reference;
  public Data ={
    place: '',
    district: '',
    info: '',
  }

  constructor(private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    public appcomp: AppComponent,
    private SnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      info: ''
    });
    this.getAll();
  }

  get f() { return this.registerForm.controls; }

  getAll() {
    this.itemRef = firebase.database().ref('/DisasterDB/');
    this.itemRef.on('value', itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach(itemSnap => {
        // console.log(itemSnap);
        this.items.push({
          "id": itemSnap.key,
          "value": itemSnap.val()
        }
        );
        return false;
      });
      console.log(this.items);
      this.ref.detectChanges();
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.Data.place = this.appcomp.place;
    this.Data.district = this.appcomp.District;
    this.Data.info = this.registerForm.value.info;
    console.log(this.Data);
    this.db.list("DisasterDB").push(this.Data);
    this.onReset();
    // alert(this.appcomp.place + ' Reported')  
    this.SnackBar.open(this.appcomp.place + ' Reported', 'Dismiss', {
      duration: 3000,
    });
  }

  onReset() {
    this.registerForm.reset();
  }

  goBack() {
  }

  goToList() {
  }
}

