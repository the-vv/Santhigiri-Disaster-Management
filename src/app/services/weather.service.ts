import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LocationService } from '../services/location.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherkeyURL = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr&q=10.8505159%2C%2076.2710833'

  constructor(
    private http: HttpClient) {
    }    

    getKey(lot:number, lat:number): Observable<any>{
      return this.http.get<any>('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr&q=' + lat + '%2C' + lot)
    }

    getWeather(key:number): Observable<any>{
      return this.http.get<any>('http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + key + '?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr')
    }

}
