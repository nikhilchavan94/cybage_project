import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { product } from 'data_type';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
count=1;
  product_result:any | product;
  constructor(private route:ActivatedRoute,private service:ProductsService) { 
  }

  ngOnInit(): void { 
     let product_id=this.route.snapshot.paramMap.get('productid');
  console.log(product_id);
  this.service.get_product_data(product_id).subscribe((result)=>
  {
    console.log(result);
    if(result)
    {
     this.product_result=result;
    }
  })
  }


 quantity(val:string)
 {
   if(this.count<20 && val==='max')
   {
      this.count++;
   }
   else if(this.count >1 && val==='min')
   {
    this.count--;
   }
 }
 
}
