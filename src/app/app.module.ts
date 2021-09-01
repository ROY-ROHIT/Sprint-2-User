import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustUpdateComponent } from './cust-update/cust-update.component';
import { AddUpdateComponent } from './add-update/add-update.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewallproductComponent } from './viewallproduct/viewallproduct.component';
import { ViewproductbyIdComponent } from './viewproductby-id/viewproductby-id.component';
import { AdminAccessGuard } from './admin-access.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    CustUpdateComponent,
    AddUpdateComponent,
    UserUpdateComponent,
    AllCustomerComponent,
    CustomerRegComponent,
    UpdateComponent,
    HomeComponent,
    AddProductComponent,
    ProductComponent,
    UpdateProductComponent,
    ViewProductByCategoryComponent,
    ViewallproductComponent,
    ViewproductbyIdComponent,
    PageNotFoundComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
