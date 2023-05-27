import { Router } from '@angular/router';
import { ServiService } from './../../service/servi.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private service: ServiService,
    private router: Router,
    private renderer:Renderer2
    ){}
    ngAfterViewInit() {
      this.renderer.listen(window, 'load', () => {
        const preLoadingElement = document.getElementById('preLoading');
        this.renderer.setStyle(preLoadingElement, 'display', 'none');
      });
    }

    title ='pagination'
    POSTS:any;
    page:number =1;
    count:number =0;
    tableSize:number =5;
    tableSizes:any=[2,10,15,20];
  
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
     this.service.getAllProperty(2).subscribe({
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

  


onTableSizechange(event:any){
  this.page= event;
   this.allProperty;
}

pagenUmber(){
  
  console.log(this.tableSize);
  
  this.service.getAllProperty( this.tableSize ).subscribe({
    next: r=>{
      console.log(r);
      this.allProperty = r;
      const preLoadingElement = document.getElementById('preLoading');
        this.renderer.setStyle(preLoadingElement, 'display', 'block');

      
    },
    error: err=>{
      console.log(err);
      
    }
   })
}
}
