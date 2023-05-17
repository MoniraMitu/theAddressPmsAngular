import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ServiService } from '../service/servi.service';

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.scss']
})
export class BookedListComponent implements OnInit{
  constructor(private service:ServiService){}

  form!: FormGroup;
  list!:any;

ngOnInit(): void {
    this.service.getAll().subscribe(res=>{
      this.list=res;
      console.log(res);
      
    })
  }

 

  
  
  Submits(user:NgForm){
    console.log(user.value);   
       
        this.service.update(user.value.id,user.value).subscribe({
          next: r=>{
            console.log(r);
            
          },
          error: e=>{
            console.log(e);
            
          }
          
        })
        
  this.ngOnInit()
       }
  
       delete(id:any){
        this.service.delete(id).subscribe({
          next: r=>{
            this.list = r;
          },
        })
        this.ngOnInit()
      }
    

        update(edit: any, f: NgForm){
          f.setValue({
           id: edit.id,
           name: edit.name,
           address:edit.address,
           gender:edit.gender,
          contactNumber:edit.contactNumber,
          //  propertyId:edit.propertyId,
          //  propertyName:edit.propertyName,
          //  propertyPrice:edit.propertyPrice,
          })
          this.ngOnInit()
          }

  

 

}
  

