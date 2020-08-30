import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { AppComponent } from '../app.component';

export class Weather {
  Date: string;
  EpochDate: number;
  Temperature: Array<any>;
  Day: Array<any>;
  Night: Array<any>;
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
  weather: Array<any>;
  DailyForecasts: Array<any>;
  Dailyweather: Array<any>;
  Place: string;
  district: string;

  constructor(
    private Location: LocationService,
    private wKey: WeatherService,
    private appcomp: AppComponent
  ) { }

  ngOnInit(): void {

    this.Location.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lot = pos.lng;
      console.log(`Positon: ${this.lot} ${this.lat}`);

      this.getWeatherkey();
 
      // temporary for development   
      // this.weather = this.temphrweather;   
      // this.Place = this.tempGeoData.LocalizedName + ', ' + this.tempGeoData.AdministrativeArea.LocalizedName;
      // this.appcomp.place =  this.tempGeoData.LocalizedName;
      // this.appcomp.placeURL = 'https://maps.google.com/maps?q=olamattom&t=&z=13&ie=UTF8&iwloc=&output=embed';
      // this.appcomp.District = this.tempGeoData.SupplementalAdminAreas[0].LocalizedName;
      // console.log(this.appcomp.District)
    });

  }

  getWeatherkey() {
    this.wKey.getKey(this.lot, this.lat)
      .subscribe(response => {
        this.locationKey = response.Key;
        this.Place = response.LocalizedName + ', ' + response.AdministrativeArea.LocalizedName;
        this.appcomp.place = response.LocalizedName;
        this.appcomp.placeURL = 'https://maps.google.com/maps?q=' + response.LocalizedName + '&t=&z=13&ie=UTF8&iwloc=&output=embed'
        console.log(this.locationKey)
        this.appcomp.District = response.SupplementalAdminAreas[0].LocalizedName;
        console.log(this.appcomp.District)
        this.getHourlyWeather()
      });
  }

  getHourlyWeather(){
    this.wKey.getHRWeather(this.locationKey)
      .subscribe(response => {
        this.weather = response;
        console.log(this.weather)
      })
  }

  getDayWeather() {
    this.wKey.getWeather(this.locationKey)
      .subscribe(response => {
        this.weather = response.DailyForecasts;
        console.log(this.weather)
      })
  }

  temphrweather = [
    {
      "DateTime": "2020-08-17T15:00:00+01:00",
      "EpochDateTime": 1597672800,
      "WeatherIcon": 4,
      "IconPhrase": "Intermittent clouds",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 79,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 47,
      "MobileLink": "http://m.accuweather.com/en/ng/miango/255093/hourly-weather-forecast/255093?day=1&hbhhour=15&lang=en-us",
      "Link": "http://www.accuweather.com/en/ng/miango/255093/hourly-weather-forecast/255093?day=1&hbhhour=15&lang=en-us"
    }
  ]

  TempWeatherdata = {
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

  tempGeoData = {
    "Version": 1,
    "Key": "2875829",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Nellaya",
    "EnglishName": "Nellaya",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "KL",
      "LocalizedName": "Kerala",
      "EnglishName": "Kerala",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 10.875,
      "Longitude": 76.281,
      "Elevation": {
        "Metric": {
          "Value": 85.0,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 278.0,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Palakkad",
        "EnglishName": "Palakkad"
      },
      {
        "Level": 3,
        "LocalizedName": "Ottappalam",
        "EnglishName": "Ottappalam"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  }
}
