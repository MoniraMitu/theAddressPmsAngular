import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiService } from 'src/app/service/servi.service';

@Component({
  selector: 'app-search-by-area',
  templateUrl: './search-by-area.component.html',
  styleUrls: ['./search-by-area.component.scss']
})
export class SearchByAreaComponent {

  constructor(
    private service: ServiService,
    private router: Router,
    private route : ActivatedRoute,
    private renderer:Renderer2
    ){}
   

    searchedProperty !:any;

  productClicked(id: number){
    this.router.navigate(["/userViewProperty/" + id])
  }

  word!: string;
  ngOnInit() {
    this.word = this.route.snapshot.params["word"];

    this.service.getPropertyBySearchByArea(this.word).subscribe({
      next: (r) => {
        this. searchedProperty = r;
        
      },
      error: (err) => {
       console.log("ku ku ku");
       
        console.log(err);
      },
    });
  }

  
}
