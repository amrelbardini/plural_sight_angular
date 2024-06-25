import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';




const routes: Routes = [

  {path:":id",  pathMatch:'full', component:ProductDetailsComponent},
  {path:":id/edit",  pathMatch:'full', component:ProductEditComponent},
  {path:"", pathMatch:'full', component:ProductListingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductsRoutingModule { }
