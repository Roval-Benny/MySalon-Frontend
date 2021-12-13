import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  c:Cart=new Cart("","","","","","",2,"");
  cartarray:Array<Cart>=[new Cart("1","1","haircut","stylesalon","101","500",2,"")]
  constructor(private rs:RouterService) { }
  ngOnInit(): void {
  }

  onCheckout(){
    this.rs.routeToCheckout(1);
  }
  delete(){
    alert("delete");
  }
}
