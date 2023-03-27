import { ServiService } from './../../service/servi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  constructor(private service: ServiService){}
  allProperty!:any;

  ngOnInit(){
     this.service.getAllProperty().subscribe({
      next: r=>{
        console.log(r);
        this.allProperty = r;
        
      },
      error: err=>{
        console.log(err);
        
      }
     })
  }
}
