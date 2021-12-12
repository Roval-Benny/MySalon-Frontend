import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  public value: Date [] = [new Date ("12/16/2021")]  
    public multiSelect: Boolean = true;
    

  constructor() { }

  ngOnInit(): void {
  }

}
