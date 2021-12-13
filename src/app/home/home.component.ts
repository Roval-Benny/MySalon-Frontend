import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs:RouterService) { }
  n:Array<number> = [1,2,3];
  ngOnInit(): void {
  }
  onNearbySalon(id:any){
    this.rs.routeToSalonDetail(id);
  }
  onService(id:any){
    this.rs.routeToSalonList(id);
  }
}
