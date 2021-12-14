import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../model/cart';
import { Salon } from '../model/salon';
import { SalonService } from '../model/salon-service';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  services:Array<Service> = [];
  serviceSubject:BehaviorSubject<Array<Service>> = new BehaviorSubject(this.services);
  nearbySalon:Array<Salon> = [];
  nearbySalonSubject:BehaviorSubject<Array<Salon>> = new BehaviorSubject(this.nearbySalon);
  todaysDeal:Array<SalonService> = [];
  todayDealSubject:BehaviorSubject<Array<SalonService>> = new BehaviorSubject(this.todaysDeal);
  salonService: Array<SalonService> = [];
  salonServiceSubject:BehaviorSubject<Array<SalonService>> = new BehaviorSubject(this.salonService);
  cart:Array<Cart> = [];
  cartSubject:BehaviorSubject<Array<Cart>> = new BehaviorSubject(this.cart);
  constructor(private httpClient:HttpClient) {
      this.getCart().subscribe(data=>{
         this.cart = data;
            this.cartSubject.next(this.cart);
      });
   }
   getServices():Observable<Array<Service>>{
      return this.httpClient.get<Array<Service>>("http://localhost:3000/services")
   }
   getNearbySalon():Observable<Array<Salon>>{
      return this.httpClient.get<Array<Salon>>("http://localhost:3000/nearby-salon")
   }
   getTodaysDeal():Observable<Array<SalonService>>{
      return this.httpClient.get<Array<SalonService>>("http://localhost:3000/todays-deal")
   }
   getSalonService():Observable<Array<SalonService>>{
      return this.httpClient.get<Array<SalonService>>("http://localhost:3000/salon-service")
   }
   getCart():Observable<Array<SalonService>>{
      return this.httpClient.get<Array<SalonService>>("http://localhost:3000/cart")
   }
   addToCart(cart:Cart){
      this.httpClient.post<Cart>("http://localhost:3000/cart",cart).subscribe(
         data=>{
            this.cart.push(data);
            this.cartSubject.next(this.cart);
            alert("Added to cart");
         }
      )
   }

}
