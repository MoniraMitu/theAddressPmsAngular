import { NgForm } from '@angular/forms';
import { ServiService } from './../service/servi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit{
  selectedValue!: string;
  constructor(
    private service: ServiService,
    private route: ActivatedRoute
    
    ){}

    property!: any;
    id: any;
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.service.getPropertyById(this.id).subscribe({
        next: (r: any) => {
          this.property = r;
          console.log(this.property);
        },
        error: (err: any) => {
          alert(err);
          console.log(err);
        },
      });
    }


  Submits(user: NgForm){
    user.value.createdBy=user.value.name;
    user.value.propertyId = this.id;
    user.value.propertyName = this.property.name;
    user.value.propertyPrice = this.property.price;
    console.log(user.value);


    this.property.active = false;
    console.log(this.property);
    

    this.service.updateProperty(this.property, this.property.id).subscribe({
       next: (n: any)=>{
        console.log(n);
        
       },
       error: (e: any)=>{
        console.log(e);
        
       }
    })

    this.service.adding(user.value).subscribe((r: any)=>{console.log(r);
      user.reset()
      alert("Property Booked")
    })

   
    
 }
}
