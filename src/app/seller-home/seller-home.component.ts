import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { product } from 'data_type';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
product_list:undefined | product[];
delete_message:string='';
icon=faTrash;
icon2=faPenSquare;
  constructor( private product:ProductsService,private router:Router,private dtect:ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
      this.product.get_product().subscribe((result:any)=>
      {
          console.log(result);
          this.product_list=result;
      })      
  }

        delete_product(id:number)
      {
         this.product.delete_product(id).subscribe((result)=>
         {
          console.log(result);
          if(result)
          {
            this.delete_message="Product Deleted Successfully"
            this.productlist();
          }
         })
                                            
      }
    
      
          productlist()
          {
            this.product.get_product().subscribe((result:any)=>
            {
                console.log(result);
                this.product_list=result;
            })  
          }
      
  
}


