import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SanthigiriDMS';
  registerForm: FormGroup;
  submitted = false;
  public addType: boolean = true;
  public items: Array<any> = [];
  public itemRef: firebase.database.Reference;

  lat: number;
  lot: number;
  mapURL: string;
  placeURL: string;

  constructor(private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    private Location: LocationService) {
  }

  ngOnInit() {    

    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required,],
      Email: ['', [Validators.required, Validators.email],],
      model: ['', Validators.required,],
      id: ['', Validators.required,],
      date: ['', Validators.required,],
      company: ['', Validators.required,],
      feedback: [''],
      place: ['', Validators.required,],
    }, {
    });
    this.getAll();
  }

  get f() { return this.registerForm.controls; }

  getAll() {
    this.itemRef = firebase.database().ref('/users/');
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
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.db.list("users").push(this.registerForm.value);
    this.addType = false
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  goBack() {
    this.addType = true;
  }

  goToList() {
    this.addType = false;
  }

}