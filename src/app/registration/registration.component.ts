import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 

  public signupForm !:FormGroup;
  constructor(private rs:RouterService, private formBuilder : FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      age:[''],
      gender:[''],
      mobile:[''],
      email:['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe(res=>{
      alert("Registration Succcesfull");
    })
  }

  // onRegister(){
  //   this.rs.routeToHome();
  // }

 
}
