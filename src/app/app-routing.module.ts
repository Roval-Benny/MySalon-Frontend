import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegistrationComponent } from './registration/registration.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { SalonListComponent } from './salon-list/salon-list.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'salon-list/:id', component: SalonListComponent },
  { path: 'salon-detail/:id', component: SalonDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
