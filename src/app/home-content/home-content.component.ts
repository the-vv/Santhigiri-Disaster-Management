import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  lat: number;
  lot: number;
  locationKey: number;
  weather: Array<any>;

  constructor(
    private Location: LocationService,
    private wKey: WeatherService
  ) { }

  ngOnInit(): void {

    this.Location.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lot = pos.lng;      
      console.log(`Positon: ${this.lot} ${this.lat}`);
      this.getWeatherkey();
    })
  }
  
  getWeatherkey(){
    console.log(this.lot, this.lat, 'for key')
      this.wKey.getKey(this.lot, this.lat)
      .subscribe(response=>{
        this.locationKey = response.Key;
        console.log(this.locationKey)
        this.getWeather()
      })
  }

  getWeather(){
    this.wKey.getWeather(this.locationKey)
    .subscribe(response=>{
      this.weather = response
      console.log(this.weather)
    })
  }

}
