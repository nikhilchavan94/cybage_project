import { Component } from '@angular/core';
import { ECommerceServicesService } from './service/e-commerce-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e_commerce';
constructor(private seller:ECommerceServicesService)
{

}
}
