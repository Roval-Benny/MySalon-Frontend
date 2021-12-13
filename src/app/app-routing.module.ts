import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegistrationComponent } from './registration/registration.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch: 'full'},
  {path:'header', component: HeaderComponent},
  {path:'salon-detail', component: SalonDetailComponent},
  {path:'login', component: LoginComponent},
  {path: 'otp', component: OtpComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'adminpanel', component: AdminSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
