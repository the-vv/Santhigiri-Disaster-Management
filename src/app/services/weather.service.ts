import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherkeyURL = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Z12rLGHLn6PxyxMLhvfiWQ8kAmcihdCr'

  constructor(
    private http: HttpClient
  ) { }
}
