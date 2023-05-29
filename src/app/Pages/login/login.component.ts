import { Component, assertPlatform } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ServiService } from 'src/app/service/servi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
[x: string]: any;

constructor(
  private service: ServiService,
  private router: Router,
  private authService: AuthServiceService
){}




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

message:string = "";

formSubmit(data: NgForm) {
  console.log(data.value);
  console.log(this.allUser);

  let foundUser = this.allUser.find((e: any) => {
    return e.name === data.value.name && e.password === data.value.password;
  });
  

  if (foundUser) {
    this.authService.saveUser(foundUser);

    this.message = "Welcome Back ' + data.value.name + ' ! ❤️"
    alert("Logged In Done ")
    
   

    this.router.navigate(['/home']);

  } else {
    this.message = 'User Name Or Password Is InCorrect..'
    alert( 'User Name Or Password Is InCorrect..')
  }
}


showMessageFlag: boolean = false;

public  closeMessage() {
  this.showMessageFlag = false;
}
public showMessage() {
  this.showMessageFlag = true;
  setTimeout(() => {
    this.showMessageFlag = false;
  }, 3000);
}
}

