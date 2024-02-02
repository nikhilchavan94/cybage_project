import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
query:any;
another_query:any;
  constructor(private service:ProductsService,private router:ActivatedRoute) {
    this.query=this.router.snapshot.paramMap.get('query');
    console.log(this.query);
this.service.search_products(this.query).subscribe((result)=>
    {
      console.log(result);
      this.another_query=result;
    })
   }

  ngOnInit(): void {
    
  }

}
