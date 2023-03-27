import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  submits(user:NgForm){
    console.log(user.value);
    sessionStorage.clear()
    sessionStorage.setItem("admin", JSON.stringify(user.value.name))
    
  }
}
