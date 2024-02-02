import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { FormControl, FormGroup } from '@angular/forms';
import { product } from 'data_type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  // practice
product_id:any;
product_data:any | product
message:string=''
  constructor(private service : ProductsService,private route:ActivatedRoute)
  {
        this.product_id=this.route.snapshot.paramMap.get('id');
        // or this.route.snapshot.params['id']
        this.service.get_product_data(this.product_id).subscribe((result)=>
        {
          this.product_data=result;             
        })
  }
  product_form = new FormGroup({
    product_name: new FormControl(''),
    product_category: new FormControl(''),
    product_description: new FormControl(''),
    product_imgurl: new FormControl(''),
    product_price: new FormControl(''),
  });
  ngOnInit(): void {}

  update_product(data:any)
  {
  this.service.update_product(this.product_id,data).subscribe((result)=>
  {
    console.log(result);
    if(result)
    {
        this.message="product updated successfully.."
    }
    
  })
  }
}
