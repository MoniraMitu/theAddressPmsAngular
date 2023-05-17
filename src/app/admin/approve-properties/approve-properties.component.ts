import { Component } from '@angular/core';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-approve-properties',
  templateUrl: './approve-properties.component.html',
  styleUrls: ['./approve-properties.component.scss']
})
export class ApprovePropertiesComponent{

  constructor(private service: ServiService){}
   list!: any;
  ngOnInit(): void {
          this.service.getAllUnApprovedProperty().subscribe({
      next: r=>{
        this.list = r;
      },
      error: e=>{
        console.log(e);
        
      }
    })
  }

  approve(d: any){
    d.approval = true;
    console.log(d);
    
   this.service.updateProperty(d, d.id).subscribe({
    next(value) {
      console.log(value);
      alert("Property Approved")
      
    },
    error(err) {
      console.log(err);
      
    },
   })
   this.ngOnInit();
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

}
