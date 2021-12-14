import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Salon } from '../model/salon';
import { SalonService } from '../model/salon-service';
import { Service } from '../model/service';
import { DataService } from '../services/data.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  n:Array<number> = [1,2,3];
  services:Array<Service> = [];
  formater:DatePipe = new DatePipe('en-US');
  date :Date = new Date(Date.now());
  todaysDate = this.formater.transform(this.date, 'dd-MM-yyyy')?.toString();
  nearbySalon:Array<Salon> = [];
  todaysDeal:Array<SalonService> = [];
  constructor(private rs:RouterService,private ds:DataService) { 
      this.ds.getServices().subscribe(
        (data)=>{
          this.services = data;
        }
      )
      this.ds.getNearbySalon().subscribe(
        (data)=>{
          this.nearbySalon = data;
        }
      )
      this.ds.getTodaysDeal().subscribe(
        (data)=>{
          this.todaysDeal = data;
        }
      )

  }
  
  ngOnInit(): void {
  }
  onNearbySalon(id:any){
    this.rs.routeToSalonDetail(id);
  }
  onService(id:any){
    this.rs.routeToSalonList(id);
  }
  onAddService(salonService:SalonService){
    if(this.todaysDate) salonService.date = this.todaysDate;
    this.ds.addToCart(salonService);
  }
}
