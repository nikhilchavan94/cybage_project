import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  message: string = '';
  constructor(private service: ProductsService) {}
  product_form = new FormGroup({
    product_name: new FormControl(''),
    product_category: new FormControl(''),
    product_description: new FormControl(''),
    product_imgurl: new FormControl(''),
    product_price: new FormControl(''),
  });
  ngOnInit(): void {}
  add_product(data: any) {
    this.service.add_product(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.message = 'Product Addes Successfully';
      }
   
    });
  }
}
