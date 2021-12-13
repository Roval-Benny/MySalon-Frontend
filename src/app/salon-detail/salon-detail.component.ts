import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from '../model/salon-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {

  salonServiceMen:Array<SalonService> = [];
  salonServiceWomen:Array<SalonService> = [];
  salonServiceBoy:Array<SalonService> = [];
  salonServiceGirl:Array<SalonService> = [];

  constructor(private route: ActivatedRoute,private ds:DataService) { 
    alert(this.route.snapshot.params['id']);
    this.ds.getSalonService().subscribe(
      data => {
        this.salonServiceMen = data.filter(x=>x.category==0);
        this.salonServiceWomen = data.filter(x=>x.category==1);
        this.salonServiceBoy = data.filter(x=>x.category==2);
        this.salonServiceGirl = data.filter(x=>x.category==3);

      }
    )
  }
  ngOnInit(): void {
    
  }
  onAddService(service:SalonService){
    this.ds.addToCart(service);
  }

}
