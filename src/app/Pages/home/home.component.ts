import { Router } from '@angular/router';
import { ServiService } from './../../service/servi.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private service: ServiService,
    private router: Router
    ){}
  allProperty!:any;
  selectedArea="area";
  selectedCategory= "category";
  selectedType= "type";

 submit(data:NgForm){
console.log(data.value);

 if(data.value.category === 'For Buy'){
  data.value.category = 'For Sell'
 }

this.service.getPropertyBySearch(data.value.area, data.value.category, data.value.type).subscribe({
  next: r=>{
    console.log(r);
    this.allProperty = r;
    
  },
  error: err=>{
    console.log(err);
    
  }
 })

 }


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
  productClicked(id: number){
    this.router.navigate(["/userViewProperty/" + id])
  }
}
