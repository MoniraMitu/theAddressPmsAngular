import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private service: ServiService,
    private router: Router,
    private route:ActivatedRoute,
   
    ){}
  
  

 
 list !: any;
 update(up :any){
 


 }
 id!:any;
 ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.service.getSignUpsById(this.id).subscribe({
    next:r=>{
      this.list=r;
      console.log(this.list);
      
    },
error:er=>{
  console.log(er);
  
}
  })
 }
  
}
