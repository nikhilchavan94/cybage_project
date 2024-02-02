import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
formswitch=false;
message_error:string='';
  constructor(private service:UserserviceService) { }
  form=new FormGroup(
  {
    name :new FormControl(''),
    surname :new FormControl(''),
    email :new FormControl(''),
    password :new FormControl('')
  }
)
  ngOnInit(): void {
    this.service.user_signup_reload();
  }

  submit_user_signup(data:any)
  {
    this.service.user_signup(data);
  }

  
  openlogin()
  {
      this.formswitch=!this.formswitch;
  }


// login for user

  loginform=new FormGroup(
    {
      name :new FormControl(''),
      surname :new FormControl(''),
      email :new FormControl(''),
      password :new FormControl('')
    })

  submit_user_login(data:any)
  {
      this.service.user_login(data);
     this.service.error.subscribe((error)=>
     {
      if(error)
      {
        this.message_error='Check Username Or Password';
      }
     })

  }

  opensignup()
  {
    this.formswitch=!this.formswitch;
  }

}
