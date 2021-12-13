import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  public value: Date [] = [new Date ("12/16/2021")]  
    public multiSelect: Boolean = true;
    

  constructor(private as:ActivatedRoute,private rs:RouterService) { }
  ngOnInit(): void {
  }

}
