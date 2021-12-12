import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';



import { HomeComponent } from './home/home.component';

import { SalonListComponent } from './salon-list/salon-list.component';
import { FooterComponent } from './footer/footer.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SalonDetailComponent,
    HeaderComponent,
    CheckoutComponent,
    SalonListComponent,
    HomeComponent,
    FooterComponent,
    UserAppointmentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
