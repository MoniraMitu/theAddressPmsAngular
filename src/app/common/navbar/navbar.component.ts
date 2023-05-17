import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor (
    private authService:AuthServiceService,
    private router:Router,
  ){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  LogOutUser(){
    sessionStorage.removeItem(this.authService.USER_KEY);
    alert('You Have Logged Out: ');
  }
  goToUrPropile(){
  this.router.navigate(["/home/userDetails/dd"])
  }
}
