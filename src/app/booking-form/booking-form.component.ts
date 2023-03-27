import { NgForm } from '@angular/forms';
import { ServiService } from './../service/servi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  constructor(private service: ServiService){}
  Submits(user: NgForm){
    console.log(user.value);
    this.service.adding(user.value).subscribe(r=>{console.log(r);
      user.reset()
      alert("Property Booked")
    })
    
 }
}
