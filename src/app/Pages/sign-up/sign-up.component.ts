import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  [x: string]: any;

  constructor(
   private service: ServiService,
    private router: Router
  ) {}
  
  allUser!: any;

  

  ngOnInit(): void {
    this.service.getAllSignUp().subscribe({
      next: (r) => {
        this.allUser = r;
      },
      error: (err) => {
        alert(err);
      },
    });
  }


  
  submit(d: NgForm) {

    let foundUserEmail = this.allUser.find((e: any) => {
      return e.email === d.value.email;
    });

    

  
      alert("Signing up successful! ")
  

    if(foundUserEmail){
      alert("This Email is Already Used")
    }else{

      if(d.value.password.length <8){
        alert("Password must be 8 characters long or more")
      }else{
    
    if(d.valid){
  
    this.service['addingSignUp'](d.value).subscribe({
      next: (r) => {
        d.reset();
       
        this.router.navigate(['/login']);
      },
      error: (e) => {
        alert(e);
      },
    });
    }else{
      alert("Please Fill The Full Form")
    }
  }

  }
   
  }
  showMessageFlag: boolean = false;


  public closeMessage() {
     this.showMessageFlag = false;
   }
  public showMessage() {
     this.showMessageFlag = true;
     setTimeout(() => {
       this.showMessageFlag = false;
     }, 3000);
   }

}
