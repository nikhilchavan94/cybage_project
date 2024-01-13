import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
home_product_list:any=[];
  constructor(private service:ProductsService) { 
    this.service.get_home_products().subscribe((result)=>
    {
      console.log(result);
      this.home_product_list=result;      
    })
  }


  ngOnInit(): void {
    
  }


}

