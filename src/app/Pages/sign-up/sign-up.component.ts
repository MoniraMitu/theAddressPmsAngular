import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
   private service: ServiService,
    private router: Router
  ) {}

  submit(d: NgForm) {
   
    this.service.addingSignUp(d.value).subscribe({
      next: (r) => {
        d.reset();
        alert('Account has Been Created, Now Login:');
        this.router.navigate(['/login']);
      },
      error: (e) => {
        alert(e);
      },
    });
  }
}
