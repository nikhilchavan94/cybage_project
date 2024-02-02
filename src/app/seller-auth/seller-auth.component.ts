import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ECommerceServicesService } from '../service/e-commerce-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private e_com_service:ECommerceServicesService, private router:Router) { }

  ngOnInit(): void {
    this.e_com_service.reload_seller()
  }
  
showlogin=false;
error:string='';


  form=new FormGroup(
    {
      name:new FormControl(''),
      surname:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    }
  )
  
  submit_seller_auth(data:any)
{
  this.e_com_service.seller_sign_up(data);  
}


openlogin()
{
  this.showlogin=true;
}

// login part seller
loginform=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})

logsubmit(data:any)
{
    this.e_com_service.seller_login(data);
    this.e_com_service.isError.subscribe((errorfound)=>
      {
            if(errorfound)
            {
              this.error="email or password not found";
            }
      })
}
opensignup()
{
  this.showlogin=false;
}
}
