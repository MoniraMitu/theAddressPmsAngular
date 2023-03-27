import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductItemComponent } from './resources/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/pages/admin-login/admin-login.component';
import { AddPropertyComponent } from './admin/add-property/add-property.component';
import { ViewPropertyComponent } from './admin/view-property/view-property.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookedListComponent } from './booked-list/booked-list.component';

@NgModule({
  declarations: [
    AppComponent,
         LoginComponent,
         SignUpComponent,
         NavbarComponent,
         HomeComponent,
         ProductItemComponent,
         AdminComponent,
         AdminLoginComponent,
         AddPropertyComponent,
         ViewPropertyComponent,
         ContactPageComponent,
         FooterComponent,
         BookingFormComponent,
         BookedListComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
