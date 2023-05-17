import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  redirectToBuyPage() {
    if (this.loggedIn === null) {
      alert('Login Or Create an Account First');
      this.router.navigate(['/login']);
    } else {
      
    }
  }

  productClickedForBuy(id: number){
    this.router.navigate(["/bookingForm/property/" + id])
  }
}