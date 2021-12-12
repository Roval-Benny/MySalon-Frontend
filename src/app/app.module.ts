import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegistrationComponent } from './registration/registration.component';
=======
import { CheckoutComponent } from './checkout/checkout.component';
=======

import { CartComponent } from './cart/cart.component';

import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { SalonListComponent } from './salon-list/salon-list.component';
import { FooterComponent } from './footer/footer.component';

>>>>>>> a94f60f5c824f9fcde7bd7da78e3809d64a62576
>>>>>>> 9328bf95bef6b5ed57caa17e146ccdf125d4bdb9

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SalonDetailComponent,
    HeaderComponent,
<<<<<<< HEAD
    LoginComponent,
    OtpComponent,
    RegistrationComponent
=======
<<<<<<< HEAD
    CheckoutComponent
=======
    SalonListComponent,
    HomeComponent,
    FooterComponent

>>>>>>> a94f60f5c824f9fcde7bd7da78e3809d64a62576
>>>>>>> 9328bf95bef6b5ed57caa17e146ccdf125d4bdb9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
