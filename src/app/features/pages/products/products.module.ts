import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';

import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import {  reducer } from './state/product.reducer';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductsComponent
  ],
  imports: [
  CommonModule,
    ProductsRoutingModule,
    FormsModule,
    StoreModule.forFeature('products', reducer) // feature slice name + reducer pure function

  ],


})
export class ProductsModule { }
