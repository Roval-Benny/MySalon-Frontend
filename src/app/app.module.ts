import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
>>>>>>> 55294b8871ac2c839f7ef61dcb60e5611ddca720

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CartComponent
=======
    SalonDetailComponent,
    HeaderComponent
>>>>>>> 55294b8871ac2c839f7ef61dcb60e5611ddca720
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
