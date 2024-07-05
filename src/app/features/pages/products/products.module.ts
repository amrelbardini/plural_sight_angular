import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/app/shared/interceptors/interceptor';


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

  ],


})
export class ProductsModule { }
