import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  successFull(){
    alert("OTP Sent To Your Mobile Number");
  }

  

    
}
