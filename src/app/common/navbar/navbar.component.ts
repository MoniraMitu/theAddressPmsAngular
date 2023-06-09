import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  Submits(d:NgForm){
 console.log(d.value.Search);
 this.router.navigate(['/propertiesBySearchByArea/' + d.value.Search]);
  }
  user!:any;
  id!:any;
  ngOnInit(): void {
    
   

  // console.log( this.id=JSON.parse(this.user).id);
  
  }
  LogOutUser(){
    sessionStorage.removeItem(this.authService.USER_KEY);
    alert('You Have Logged Out: ');
    this.router.navigate(["/home"]);
  }
  goToUrProfile(){
    this.user=this.authService.getUser();
  this.id=this.authService.getUseriid();

   console.log(this.authService.getUseriid() + "dklfdslkfsdjfk");

    if(this.user === null ){
      alert("LogIn First")
      this.router.navigate(["/login"])
    } 
    else{
      this.router.navigate(["/home/userDetails/"+this.id])
    }
 
  }
}
