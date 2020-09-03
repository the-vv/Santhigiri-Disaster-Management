import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SanthigiriDMS';
  lat: number;
  lot: number;
  mapURL: string;
  placeURL: string;
  District: string;
  place: string;
  constructor(private Location: LocationService) {
  }

  ngOnInit() {    
  }
  
}