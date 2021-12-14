import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { SalonService } from '../model/salon-service';
import { DataService } from '../services/data.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  service:Array<SalonService>=[];
  constructor(private rs:RouterService,private ds:DataService) { }
  ngOnInit(): void {
    this.ds.getCart().subscribe(
      data=>{
        this.service=data;
      }
    );
  }

  onCheckout(){
    this.rs.routeToCheckout(1);
  }
  delete(){
    alert("delete");
  }
}
