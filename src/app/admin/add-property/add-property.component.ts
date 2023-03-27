import { ServiService } from './../../service/servi.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
constructor(private service: ServiService){}
submit(user: NgForm){
   console.log(user.value);
   this.service.add(user.value).subscribe(r=>{})
   
}
}
