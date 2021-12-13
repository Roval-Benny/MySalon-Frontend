import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private as:ActivatedRoute) { }

  ngOnInit(): void {
     console.log(this.as.snapshot.paramMap.get('array'));
  }

}
