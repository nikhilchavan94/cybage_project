import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user_login } from 'data_type';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
url="http://localhost:3000/user";
error=new EventEmitter;
message:string='';
  constructor(private http:HttpClient,private router:Router) {   }

  user_signup(data:any)
  {
    this.http.post(this.url,data,{observe:'response'}).subscribe((result)=>
    {
      console.log(result);
      if(result)
      {
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/'])
      }
      
    })
  }


  user_signup_reload()
  {
    if(localStorage.getItem('user'))
    {
      this.router.navigate(['/'])
    }
  }




  // user login
  //format    http://localhost:3000/user?email=a@gmail.com&password=123
  user_login(data:user_login)
  {
    this.http.get(`${this.url}?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>
    {
      console.log(result);
      if(result && result.body && result.body.length)   
      // (&& result.body && result.body.length)  THIS IS MUST IF NOT ANY USER WILL LOGGED IN BEACUSE 
      // IT WILL NOT CHECK WHATS I BODY OR ITS LENGTH THAT WHY OBSERVE:'RESPONSE' ALSO MUST  
      {
        alert("user logged in successfully")
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']) 
      }
      else{
   
        this.error.emit(true);
      }
      
    })
  }

}
