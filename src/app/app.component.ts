import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'THE_ADDRESS_PMS';
 link: string = "";
  checkUrl(){
    return this.link.includes("/admin");
  }
  ngOnInit(): void {
    this.link = window.location.href;
  }
}
