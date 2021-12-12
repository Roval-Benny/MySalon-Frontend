import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private router:Router) { }

  routeToAppointment(){
    this.router.navigate(['/appointment']);
  }

  routeToHome(){
    this.router.navigate(['/home']);
  }

  routeToLogin(){
    this.router.navigate(['/login']);
  }

  routeToCart(){
    this.router.navigate(['/cart']);
  }

  routeToProfile(){
    this.router.navigate(['/profile']);
  }

  routeToCheckout(){
    this.router.navigate(['/checkout']);
  }
  routeToSalonDetail(id:any){
    this.router.navigate(['/salon-detail',id]);
  }
  routeToSalonList(id:any){
    this.router.navigate(['/salon-list',id]);
  }
}
