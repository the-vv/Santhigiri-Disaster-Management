import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  placeURL: string;
  District: string;
  place: string;
  constructor() {
  }

  ngOnInit() {
  }
}