import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

import { CartComponent } from './cart/cart.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
=======
import { CheckoutComponent } from './checkout/checkout.component';


>>>>>>> ee50c26f0191ee5d336180fdeb58329500f3bd2c



import { HomeComponent } from './home/home.component';

import { SalonListComponent } from './salon-list/salon-list.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
=======
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

>>>>>>> ee50c26f0191ee5d336180fdeb58329500f3bd2c


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SalonDetailComponent,
    HeaderComponent,
<<<<<<< HEAD
    CheckoutComponent,
    SalonListComponent,
    HomeComponent,
    FooterComponent,
    UserAppointmentsComponent
=======

    LoginComponent,
    OtpComponent,
    RegistrationComponent,

    SalonListComponent,
    HomeComponent,
    FooterComponent,
    AdminSectionComponent
>>>>>>> ee50c26f0191ee5d336180fdeb58329500f3bd2c

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
