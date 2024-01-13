import { Component, OnInit } from '@angular/core';
import { ECommerceServicesService } from '../service/e-commerce-services.service';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { product } from 'data_type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  seller_name:string='';
  serach_show:any | product
  constructor(private router: Router,private product_service:ProductsService) {}
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {

      if (val.url) {
        console.log(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('seller Login');
          this.menuType = 'seller';
          // code for getting name of seller from local storage
         if(localStorage.getItem('seller'))
         {
          let seller_detail=localStorage.getItem('seller')
          let seller_data=seller_detail && JSON.parse(seller_detail)[0]
          this.seller_name=seller_data.name
         }
        } else {
          console.log('seller out');
          this.menuType = 'default';
        }
      }
    });
  
  }
  logout()
  {
    localStorage.removeItem('seller');
    this.router.navigate([''])
  }

  saerch_product(query:KeyboardEvent)
  {
      const element= query.target as HTMLInputElement;
      this.product_service.search_products(element.value).subscribe((result)=>
      {
        console.log(result);
        this.serach_show=result;    
      })
      
      
  }  
}
