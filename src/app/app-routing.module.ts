import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuardGuard } from './guard/seller-auth-guard.guard';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [

  {component:HomeComponent, path:''},
{component:SellerAuthComponent, path:'seller_auth'},
{component:SellerHomeComponent, path:'seller_home',canActivate:[SellerAuthGuardGuard]},
{component:SellerLoginComponent,path:'seller_login',canActivate:[SellerAuthGuardGuard]},
{component:SellerAddProductComponent,path:'seller_add_product',canActivate:[SellerAuthGuardGuard]},
{component:SellerProductListComponent,path:'seller_home',canActivate:[SellerAuthGuardGuard]},
{component:UpdateProductComponent ,path:'seller_home/update_product/:id',canActivate:[SellerAuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
