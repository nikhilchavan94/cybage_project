import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ECommerceServicesService } from '../service/e-commerce-services.service';

@Injectable({
  providedIn: 'root'
}) 
export class SellerAuthGuardGuard implements CanActivate {
  constructor(private service:ECommerceServicesService)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.service.isSellerLoggedIn;
    }

}
