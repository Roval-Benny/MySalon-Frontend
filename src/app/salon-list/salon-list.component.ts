import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salon } from '../model/salon';
import { DataService } from '../services/data.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {

  constructor(private as: ActivatedRoute,private rs:RouterService,private ds:DataService) { }
  n:Array<number> = [1,2,3];
  salon:Array<Salon> = [];
  ngOnInit(): void {
    var id = this.as.snapshot.paramMap.get('id');
    this.ds.getNearbySalon().subscribe(data=>{
      this.salon = data;
    });
    alert(id);
  }
  onSalon(id:number){
    this.rs.routeToSalonDetail(id);
  }
  
}
