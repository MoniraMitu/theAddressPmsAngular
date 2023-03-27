import { ServiService } from './../../service/servi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
