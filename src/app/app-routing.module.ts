import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:"", pathMatch:'full', loadChildren:()=>import('./features/main/main.module').then(m=>m.MainModule)
  },
  {
    path:"login",  pathMatch:'full', loadChildren:()=>import('./features/pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:"products", pathMatch:'full', loadChildren:()=>import('./features/pages/products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:"products/:id",  pathMatch:'full', loadChildren:()=>import('./features/pages/products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:"products/:id/edit",  pathMatch:'full', loadChildren:()=>import('./features/pages/products/products.module').then(m=>m.ProductsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
