import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Salon } from '../model/salon';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  services:Array<Service> = [];
  serviceSubject:BehaviorSubject<Array<Service>> = new BehaviorSubject(this.services);
  nearbySalon:Array<Salon> = [];
  nearbySalonSubject:BehaviorSubject<Array<Salon>> = new BehaviorSubject(this.nearbySalon);
  constructor(private httpClient:HttpClient) {

   }
   getServices():Observable<Array<Service>>{
      return this.httpClient.get<Array<Service>>("http://localhost:3000/services")
   }
   getNearbySalon():Observable<Array<Salon>>{
      return this.httpClient.get<Array<Salon>>("http://localhost:3000/nearby-salon")
   }

}
