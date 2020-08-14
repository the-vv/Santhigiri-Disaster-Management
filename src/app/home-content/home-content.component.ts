import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

export class Weather{
  Date: string;
  EpochDate: number;
  Temperature: Array<any>;
  Day:Array<any>;
  Night:Array<any>;
}


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  lat: number;
  lot: number;
  locationKey: number;
  weather: Weather;
  DailyForecasts:Array<any> = [];
  Dailyweather: Array<any>;

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
      this.weather = response.DailyForecasts[0]
      console.log(this.weather)
      // this.getDaily();
    })
  }

  // getDaily(){
  //   for(let daily of this.data.DailyForecasts){
  //     this.DailyForecasts.push(daily);
  //   }
  //   this.Dailyweather = this.DailyForecasts[0];
  // }

  data = {
    "Headline": {
      "EffectiveDate": "2020-08-14T19:00:00+01:00",
      "EffectiveEpochDate": 1597428000,
      "Severity": 4,
      "Text": "Air quality will be unhealthy for sensitive groups Friday evening through Monday afternoon",
      "Category": "air quality",
      "EndDate": "2020-08-17T19:00:00+01:00",
      "EndEpochDate": 1597687200,
      "MobileLink": "http://m.accuweather.com/en/ng/miango/255093/extended-weather-forecast/255093?lang=en-us",
      "Link": "http://www.accuweather.com/en/ng/miango/255093/daily-weather-forecast/255093?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-08-14T07:00:00+01:00",
        "EpochDate": 1597384800,
        "Temperature": {
          "Minimum": {
            "Value": 65,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 15,
          "IconPhrase": "Thunderstorms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ng/miango/255093/daily-weather-forecast/255093?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/ng/miango/255093/daily-weather-forecast/255093?day=1&lang=en-us"
      }
    ]
  }

}
