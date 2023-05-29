import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-user-view-property',
  templateUrl: './user-view-property.component.html',
  styleUrls: ['./user-view-property.component.scss']
})
export class  UserViewPropertyComponent implements OnInit {
  constructor(
    private service:ServiService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice:AuthServiceService,
   
  ) {}

  productIndividual!: any;
  id: any;
  loggedIn!: any;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getPropertyById(this.id).subscribe({
      next: (r: any) => {
        this.productIndividual = r;
        console.log(this.productIndividual);
      },
      error: (err: any) => {
        alert(err);
        console.log(err);
      },
    });
  }
  user!:any;
  redirectToBuyPage() {
    this.user=this.authservice.getUseriid();
    if (this.loggedIn === null) {
      alert('Login Or Create an Account First');
      this.router.navigate(['/login']);
    } else {
      
    }
  }

  productClickedForBuy(id: number){
    this.user=this.authservice.getUseriid();
    if(this.user===null){
      alert('Login Or Create an Account First');
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(["/bookingForm/property/" + id])
    }
    
  }
}