import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component:ProductsComponent,

    children: [
      { path: '', component: ProductListingComponent },
      { path: ':id', component: ProductDetailsComponent },
      { path: ':id/edit', component: ProductEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
