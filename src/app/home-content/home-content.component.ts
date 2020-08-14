import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service'

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  lat: number = null;
  lot: number = null;
  
  constructor(
    private Location: LocationService
  ) { }

  ngOnInit(): void {

    this.Location.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.lat = pos.lat;
         this.lot = pos.lng;
      });

  }

}
