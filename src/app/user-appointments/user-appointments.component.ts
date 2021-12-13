import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }

}
