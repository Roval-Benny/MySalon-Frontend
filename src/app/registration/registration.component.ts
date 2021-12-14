import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { User } from '../model/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 

  public signupForm !:FormGroup;
  private phoneno:string|undefined='';
  private user:User = new User();
  private userId:string| undefined;
  constructor(private rs:RouterService, private formBuilder : FormBuilder, private http: HttpClient,private ar:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    this.phoneno = this.ar.snapshot.paramMap.get('phone')?.toString().split(' ')[0];
    this.userId = this.ar.snapshot.paramMap.get('phone')?.toString().split(' ')[1];
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
     // mobile:[this.phoneno],
      //email:['',Validators.email]
    })
  }

  signUp(){
    if(this.signupForm.valid){
        this.user.name = this.signupForm.get('name')?.value
        if(this.signupForm.get('age')?.value<18 && this.signupForm.get('gender')?.value == 'Male || male'){
          this.user.ageCategory = 2
        }else if(this.signupForm.get('age')?.value>18 && this.signupForm.get('gender')?.value == 'Male || male'){
          this.user.ageCategory = 0
        }else if(this.signupForm.get('age')?.value<18 && this.signupForm.get('gender')?.value == 'Female || female'){
          this.user.ageCategory = 3
        }
        else{
          this.user.ageCategory = 1
        }
        this.user.phoneNo = this.phoneno;
        this.user.userId = this.userId;
        console.log(this.user);
        this.ds.addUser(this.user).then(
          (res)=>{
            this.rs.routeToHome();
          }
        ).catch(
          (err)=>{
            console.log(err);
            alert('Error in adding user');
          }
        )

    }
    // this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    // .subscribe(res=>{
    //   alert("Registration Succcesfull");
    // })
  }

  // onRegister(){
  //   this.rs.routeToHome();
  // }

 
}
