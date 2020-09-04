import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient) {
  }

  getKey(lat: number, lot: number): Observable<any> {
    // console.log(lat + ',' + lot);
    return this.http.get<any>('https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr&q=' + lot + ',' + lat)
  }

  getWeather(key: number): Observable<any> {
    return this.http.get<any>('https://dataservice.accuweather.com/forecasts/v1/daily/1day/' + key + '?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr')
  }

  getHRWeather(key: number): Observable<any> {
    return this.http.get<any>('https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/' + key + '?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr')
  }

}
