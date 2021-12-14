import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import {WindowService} from '../model/window.service'
import { DataService } from '../services/data.service';
import { RouterService } from '../services/router.service';

export class PhoneNumber {
  country: string ='';
  number: string ='';
  prefix: string ='';
  line: string ='';

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.number 
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
  
  
  constructor(private win: WindowService,private ds:DataService,private rs:RouterService) { }

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

                    //this.user = result.user;
                    console.log(this.phoneNumber.e164);
                    // this.ds.getUserByPhone(this.phoneNumber.e164).subscribe(
                    //   (data:any)=>{
                    //     this.user = data;
                    //     this.rs.routeToHome();
                    //   },
                    //   (error:any)=>{
                    //     console.log(error);
                    //     this.rs.routeToRegistration(this.phoneNumber.e164+' '+result.user);
                    //   }
                    // )
                    this.ds.checkUserIsPresent(this.phoneNumber.e164).then(
                      (data:any)=>{
                        if(data){
                          this.rs.routeToHome();
                        }else{
                          this.rs.routeToRegistration(this.phoneNumber.e164+' '+result.user['userId']);
                        }
                      }
                    )

    })
    .catch( (error: any) =>{

     console.log(error, "Incorrect code entered?")
    });
  }


  

    
}
