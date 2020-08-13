import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  static lattemp: undefined;
  static lottemp: undefined;
  static LocationKey: undefined;
  static Weather: undefined;

  fset: boolean = false;
  weatherData: Array<any>;
  stepcount = 0;



  constructor() { }

  ngOnInit(): void {
    this.getLocation();
    this.TimerFunct();
  }


  TimerFunct() {
    setTimeout(() => {
      if (HomeContentComponent.lattemp && HomeContentComponent.lottemp && this.stepcount==0) {
        // console.log(HomeContentComponent.lottemp, HomeContentComponent.lattemp);
        this.getLocationKey();
        this.stepcount ++;
        this.TimerFunct();
      }
      if (HomeContentComponent.LocationKey  && this.stepcount==1) {
        console.log(HomeContentComponent.LocationKey)
        this.fset = true
        this.getWeather();
        this.stepcount ++;
        this.TimerFunct();
      }
      if (HomeContentComponent.Weather && this.stepcount==2) {
        console.log(HomeContentComponent.Weather);
        this.weatherData = HomeContentComponent.Weather;
        this.fset = true;
        console.log('ready', this.weatherData);
        this.stepcount ++;
      }
      // console.log('not ready');
      if(!this.fset){
        console.log('not ready');
        this.getLocation();
        this.TimerFunct();
      }
    }, 100);
  }


  getLocation() {
    navigator.geolocation.watchPosition(function (position) {
    },
      function (error) {
        if (error.code == error.PERMISSION_DENIED)
          alert("you denied Location Permission :-(\nWithout location Permission, it will not function properly. please allow it by going to settings.");
      });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
      console.log("Location Request send");
    } else {
      // console.log("Geolocation is not supported by this browser.");
    }
  }


  setPosition(position) {
    console.log("Location set");
    HomeContentComponent.lattemp = position.coords.latitude;
    HomeContentComponent.lottemp = position.coords.longitude;
  }

  getLocationKey() {
    fetch('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr&q=' + HomeContentComponent.lattemp + '%2C' + HomeContentComponent.lattemp)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.Key);
        HomeContentComponent.LocationKey = data.Key;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getWeather() {
    console.log('fetching');
    fetch('http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + HomeContentComponent.LocationKey + '?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        HomeContentComponent.Weather = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
