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

    getKey(lot:number, lat:number): Observable<any>{
      return this.http.get<any>('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr&q=' + lat + '%2C' + lot)
    }

    getWeather(key:number): Observable<any>{
      return this.http.get<any>('http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + key + '?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr')
    }

}
