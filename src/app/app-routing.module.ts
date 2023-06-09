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
import { UserViewPropertyComponent } from './Pages/user-view-property/user-view-property.component';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';
import { UserAddedPropertyComponent } from './Pages/user-added-property/user-added-property.component';
import { ApprovePropertiesComponent } from './admin/approve-properties/approve-properties.component';
import { SearchByAreaComponent } from './commom/navbar/search-by-area/search-by-area.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'productItem',component:ProductItemComponent},
  {path:'home/contactPage',component:ContactPageComponent},
  {path:'home/userDetails/:id',component:UserDetailsComponent},
  {path:'admin',component: AdminLoginComponent},
  {path:'admin/dashboard',component: AdminComponent},
  {path:'admin/addProperty',component: AddPropertyComponent},
  {path:'admin/viewProperty',component: ViewPropertyComponent},
  {path:'bookingForm/property/:id',component:BookingFormComponent},
   {path:'userViewProperty/:id',component:UserViewPropertyComponent},
  {path:'admin/bookedList',component:BookedListComponent},
  {path:'userAddedProperty',component:UserAddedPropertyComponent},
  {path:'admin/approveProperties',component:ApprovePropertiesComponent},
  { path: 'propertiesBySearchByArea/:word', component:SearchByAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
