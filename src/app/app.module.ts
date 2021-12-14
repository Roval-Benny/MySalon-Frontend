import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CartComponent } from './cart/cart.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { SalonListComponent } from './salon-list/salon-list.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterService } from './services/router.service';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { AdminSectionComponent } from './admin-section/admin-section.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


import { environment } from 'src/environments/environment';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 2207024d6de53ba6f9da6dd78f8a3cee7a88facb


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SalonDetailComponent,
    HeaderComponent,

    LoginComponent,
    AdminSectionComponent,
    OtpComponent,
    RegistrationComponent,
    CheckoutComponent,
    HomeComponent,
    SalonListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
   FormsModule
=======
    NgbModule
>>>>>>> 2207024d6de53ba6f9da6dd78f8a3cee7a88facb
  ],
  providers: [RouterService,
     DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
