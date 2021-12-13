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
import { AdminSectionComponent } from './admin-section/admin-section.component';


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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
