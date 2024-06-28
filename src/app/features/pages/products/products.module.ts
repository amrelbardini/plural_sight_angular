import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';


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
    SharedModule
  ]
})
export class ProductsModule { }
