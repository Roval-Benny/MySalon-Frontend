import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    alert(this.route.snapshot.params['id']);
  }
  n:Array<number> = [1,2,3,4,5,6,7,8,9,10];
  ngOnInit(): void {
    
  }
  

}
