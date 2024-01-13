import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'data_type';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/products';
  message:string='';
  add_product(data:any)
  {
   return this.http.post(this.url,data);
  }

  get_product()
  {
    return this.http.get(this.url);
  }

  delete_product(id:any)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  get_product_data(id:any)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  update_product(id:any,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }
// for homepage products
  get_home_products()
  {
    return this.http.get(`${this.url}?_limit=8`);
  }
// for searchbar
  search_products(query:string)
  {
      return this.http.get(`${this.url}?q=${query}`)
  }


  
}
