import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor() { }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          console.log(err);
          alert('Without Location Permission, This Application will not work properly.\nPlease allow Location');
        });
    });

  }

}
