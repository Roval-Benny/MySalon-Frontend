import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private rs:RouterService) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.rs.routeToHome();
  }

}
