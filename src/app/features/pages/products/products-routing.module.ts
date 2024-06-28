import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';




const routes: Routes = [
  { path:"",  component:ProductListingComponent,

    children:[
    {path:":id",   component:ProductDetailsComponent},
    {path:":id/edit",  component:ProductEditComponent},

  ]},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductsRoutingModule { }
