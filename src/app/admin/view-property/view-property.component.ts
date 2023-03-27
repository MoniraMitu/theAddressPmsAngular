import { ServiService } from './../../service/servi.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit{
constructor(private service:ServiService){}
  form!: FormGroup;
  list!:any;


  submit(user:NgForm){
    this.service.updateProperty(user.value, user.value.id).subscribe({
      next: r=>{
        console.log(r);
        
      },
      error: e=>{
        console.log(e);
        
      }
    })
    this.ngOnInit();
  }
 ngOnInit(): void {
      this.service.getAllProperty().subscribe({
        next: r=>{
          this.list = r;
        },
        error: e=>{
          console.log(e);
          
        }
      })


      
     
  //  this.form = new FormGroup({
  //   name: new FormControl(''),
    
  //  })
 }
 delete(id:any){
    this.service.deleteProperty(id).subscribe({
      next: r=>{
        this.list = r;
      },
      error: e=>{
        console.log(e);
        
      }
    })  
    this.ngOnInit()  
 }

 update(edit: any, f: NgForm){
     f.setValue({
      id: edit.id,
      name: edit.name,
      description:edit.description,
      price:edit.price,
      category:edit.category,
      bedrooms:edit.bedrooms,
      bathrooms:edit.bathrooms,
      size: edit.size,
      productImage_1 : edit.productImage_1,
      productImage_2 : edit.productImage_2,
      productImage_3 : edit.productImage_3,
     })
 }
}
