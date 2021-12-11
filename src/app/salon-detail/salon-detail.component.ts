import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {

  constructor() { }
  n:Array<number> = [1,2,3,4,5,6,7,8,9,10];
  ngOnInit(): void {
  }

}
