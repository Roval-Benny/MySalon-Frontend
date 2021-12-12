import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {

  constructor(private as: ActivatedRoute,private rs:RouterService) { }
  n:Array<number> = [1,2,3];
  ngOnInit(): void {
    var id = this.as.snapshot.paramMap.get('id');
    alert(id);
  }
  onSalon(id:number){
    this.rs.routeToSalonDetail(id);
  }
  
}
