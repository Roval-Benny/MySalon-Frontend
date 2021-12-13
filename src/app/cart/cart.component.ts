import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private rs:RouterService) { }
  ngOnInit(): void {
  }

  onCheckout(){
    this.rs.routeToCheckout(1);
  }
}
