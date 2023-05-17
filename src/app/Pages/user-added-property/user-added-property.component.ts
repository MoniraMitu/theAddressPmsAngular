import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-user-added-property',
  templateUrl: './user-added-property.component.html',
  styleUrls: ['./user-added-property.component.scss']
})
export class UserAddedPropertyComponent {
  constructor(private service: ServiService){}

  submit(user: NgForm){
    user.value.approval = false;
    user.value.active = true;
     console.log(user.value);
     this.service.add(user.value).subscribe(r=>{});
  alert("Properties added");
  user.reset();
     
  }
}
