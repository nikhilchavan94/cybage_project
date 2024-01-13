import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ECommerceServicesService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false)
  isError=new EventEmitter<boolean>(false)
  url='http://localhost:3000/seller';
  constructor(private http:HttpClient, private router: Router) {
    
   }
     
   seller_sign_up(data:any)
   {
    this.http.post(this.url,data,{observe:'response'}).subscribe(result=>
      {
        console.log("result",result);
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller_home']);
      });
   }

   reload_seller()
   {
    if(localStorage.getItem('seller'))
    {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller_home']);
    }
   }


   seller_login(data:any)
   {
    console.log("api data",data);
  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
  {observe:'response'}).subscribe((result:any)=>
  {
    if(result && result.body && result.body.length)
    {
      console.warn("seller logged in :",result);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller_home'])      
    }
    else
    {
      console.warn("Login Failed");   
      this.isError.emit(true); 
    }
  })
   }
}
