import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookedListComponent } from './booked-list/booked-list.component';
import { ViewPropertyComponent } from './admin/view-property/view-property.component';
import { AddPropertyComponent } from './admin/add-property/add-property.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';

import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/pages/admin-login/admin-login.component';
import { ProductItemComponent } from './resources/product-item/product-item.component';


import { AppComponent } from './app.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'productItem',component:ProductItemComponent},
  {path:'home/contactPage',component:ContactPageComponent},
  {path:'admin',component: AdminLoginComponent},
  {path:'admin/dashbord',component: AdminComponent},
  {path:'admin/addProperty',component: AddPropertyComponent},
  {path:'admin/viewProperty',component: ViewPropertyComponent},
  {path:'bookingForm',component:BookingFormComponent},
  {path:'admin/bookedList',component:BookedListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
