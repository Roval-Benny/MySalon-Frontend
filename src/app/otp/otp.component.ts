import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }
  onSign(){
    this.rs.routeToHome();
  }
}
