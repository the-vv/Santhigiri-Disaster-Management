import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

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

  constructor(
    private Location: LocationService,
    private wKey: WeatherService
  ) { }

  ngOnInit(): void {

    this.Location.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lot = pos.lng;
      console.log(`Positon: ${this.lot} ${this.lat}`);

      // this.getWeatherkey();

      //temporary for development   
      this.weather = this.TempWeatherdata.DailyForecasts;   
      this.Place = this.tempGeoData.LocalizedName + ', ' + this.tempGeoData.AdministrativeArea.LocalizedName;
    })

  }

  getWeatherkey() {
    console.log(this.lot, this.lat, 'for key')
    this.wKey.getKey(this.lot, this.lat)
      .subscribe(response => {
        this.locationKey = response.Key;
        this.Place = response.LocalizedName + ', ' + response.AdministrativeArea.LocalizedName;
        console.log(this.locationKey)
        this.getWeather()
      })
  }

  getWeather() {
    this.wKey.getWeather(this.locationKey)
      .subscribe(response => {
        this.weather = response.DailyForecasts;
        console.log(this.weather)
      })
  }

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
