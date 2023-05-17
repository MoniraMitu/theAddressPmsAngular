import { Component } from '@angular/core';
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

  formSubmit(data: NgForm) {
    console.log(data.value);
    console.log(this.allUser);

    let foundUser = this.allUser.find((e: any) => {
      return e.name === data.value.name && e.password === data.value.password;
    });

    if (foundUser) {
    this.authService.saveUser(foundUser);
      alert('Welcome Back ' + data.value.name + ' ! ❤️');
      this.router.navigate(['/home']);
    } else {
      alert('User Name Or Password Is InCorrect..');
    }
  



  // submits(user:NgForm){
  //   console.log(user.value);
    
  // }

}
}

