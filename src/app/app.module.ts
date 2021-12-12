import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { SalonDetailComponent } from './salon-detail/salon-detail.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SalonListComponent } from './salon-list/salon-list.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterService } from './services/router.service';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'salon-list/:id', component: SalonListComponent },
  { path: 'salon-detail/:id', component: SalonDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SalonDetailComponent,
    HeaderComponent,
    HomeComponent,
    SalonListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
