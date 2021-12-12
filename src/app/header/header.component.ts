import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private rs:RouterService) { }

  onHome(){
    this.rs.routeToHome();
  }
  onAppointment(){
    this.rs.routeToAppointment();
  }

  onProfile(){
    this.rs.routeToProfile();
  }

  onLocation(){
    alert("Location");
  }
  
  onLogin(){
    this.rs.routeToLogin();
  }

  onCart(){
    this.rs.routeToCart();
  }

}
