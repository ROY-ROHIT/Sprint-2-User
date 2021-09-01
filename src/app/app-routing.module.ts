import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUpdateComponent } from './add-update/add-update.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { CustUpdateComponent } from './cust-update/cust-update.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateComponent } from './update/update.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';
import { ViewproductbyIdComponent } from './viewproductby-id/viewproductby-id.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"registration" , component:CustomerRegComponent},
{path:"getid" , component:UpdateComponent},{path:"allcustomers", component:AllCustomerComponent, canActivate:[AdminAccessGuard]},
{path:"updatecustomer" , component:CustUpdateComponent},{path:"updateaddress" , component:AddUpdateComponent},
{path:"updateuser" , component:UserUpdateComponent},
{path:"product-list",component:ProductComponent},
{path:"product/add-product",component:AddProductComponent},
{path:'product-by-id/:productId',component:ViewproductbyIdComponent},
{path:"product",component:ViewallproductComponent, canActivate:[AdminAccessGuard]},
{path:'update-product/:productId',component:UpdateProductComponent},
{path:'product-by-category/:category',component:ViewProductByCategoryComponent},
{path:'order', component:OrderComponent},
{path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
