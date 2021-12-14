import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../model/cart';
import { Salon } from '../model/salon';
import { SalonService } from '../model/salon-service';
import { Service } from '../model/service';
import { User } from '../model/user';

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
  user:User = new User();
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
   getCart():Observable<Array<Cart>>{
      return this.httpClient.get<Array<Cart>>("http://localhost:3000/cart")
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
   removeFromCart(cart:Cart){
      this.httpClient.delete<Cart>("http://localhost:3000/cart/"+cart.id).subscribe(
         data=>{
            this.cart = this.cart.filter(c=>c.id!=cart.id);
            this.cartSubject.next(this.cart);
            alert("Removed from cart");
         }
      )
   }
   getUserByPhone(phone:string):Observable<User>{
      return this.httpClient.get<User>("http://localhost:3000/user/"+phone);
   }
   checkUserIsPresent(phone:string):Promise<Boolean>{
         let user:Array<User> ;
        return this.httpClient.get<Array<User>>("http://localhost:3000/user").toPromise().then(
            data=>{
               user = data;
               if(user.find(u=>u.phoneNo==phone)){
                  return true;
               }else{
                  return false;
               }
            }
         )
   }
   addUser(user:User):Promise<Boolean>{
      return this.httpClient.post<User>("http://localhost:3000/user",user).toPromise().then(
         data=>{
            return true;
         },
         error=>{
            return false;
         }
      )
   }
}
