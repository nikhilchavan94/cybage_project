import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuardGuard } from './guard/seller-auth-guard.guard';

import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [

{component:HomeComponent, path:''},

{component:SellerAuthComponent, path:'seller_auth'},
{component:SellerHomeComponent, path:'seller_home',canActivate:[SellerAuthGuardGuard]},

{component:SellerAddProductComponent,path:'seller_add_product',canActivate:[SellerAuthGuardGuard]},
{component:SellerProductListComponent,path:'seller_home',canActivate:[SellerAuthGuardGuard]},
{component:UpdateProductComponent ,path:'seller_home/update_product/:id',canActivate:[SellerAuthGuardGuard]},
{component:SearchPageComponent, path:'search/:query'},
{component:ProductDetailPageComponent,path:'product_detail/:productid'},
{component:UserSignupComponent,path:'user_signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
