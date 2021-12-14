import { DatePipe } from '@angular/common';
import { Component, ElementRef, Injector, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calendar, CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { SalonService } from '../model/salon-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})

export class SalonDetailComponent implements OnInit {

  //@ViewChild('ejCalendar') ejCalendar: CalendarComponent = new CalendarComponent();
  public dateValue: Date = new Date();
  salonServiceMen:Array<SalonService> = [];
  salonServiceWomen:Array<SalonService> = [];
  salonServiceBoy:Array<SalonService> = [];
  salonServiceGirl:Array<SalonService> = [];
  public calender:Calendar = new Calendar();
  public value: Date = new Date();
  //public date:string =''; 
  private formater:DatePipe = new DatePipe('en-US');
  constructor(private route: ActivatedRoute,private ds:DataService) { 
    alert(this.route.snapshot.params['id']);
    this.ds.getSalonService().subscribe(
      data => {
        this.salonServiceMen = data.filter(x=>x.category==0);
        this.salonServiceWomen = data.filter(x=>x.category==1);
        this.salonServiceBoy = data.filter(x=>x.category==2);
        this.salonServiceGirl = data.filter(x=>x.category==3);

      }
    )
  }
  ngOnInit(): void {
    
  }
onChange(args:any) {
    this.value = args.value;
    console.log( "args " + args.value);
}
  onAddService(service:SalonService){
    let date = this.formater.transform(this.value, 'dd-MM-yyyy');
    if(date){
      service.date = date;
    }
    //this.calender.value = this.value;
    console.log("Date picker "+date);
    //service.date = this.value.toLocaleDateString();
    console.log(service.date);
    console.log(service);
    this.ds.addToCart(service);
  }

}
