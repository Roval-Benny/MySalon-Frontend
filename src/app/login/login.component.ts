import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import {WindowService} from '../model/window.service'

export class PhoneNumber {
  country: string ='';
  area: string ='';
  prefix: string ='';
  line: string ='';

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }

}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber();

  verificationCode!: string ;

  user: any;
  
  
  constructor(private win: WindowService) { }

  ngOnInit() {
    firebase.initializeApp(environment.firebase);

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }
  
  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then((result: any) => {

                this.windowRef.confirmationResult = result;

            })
            .catch( (error:any)=>{
               console.log(error) 
              });

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( (result: { user: any; }) => {

                    this.user = result.user;

    })
    .catch( (error: any) =>{

     console.log(error, "Incorrect code entered?")
    });
  }


  

    
}
