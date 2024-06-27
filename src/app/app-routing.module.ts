import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:"home", pathMatch:'full', loadChildren:()=>import('./features/pages/home/home.module').then(m=>m.HomeModule)},

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path:'login', pathMatch:'full', loadChildren:()=>import('./features/pages/login/login.module').then(m=>m.LoginModule)},

  {path:'products', pathMatch:'full', loadChildren:()=>import('./features/pages/products/products.module').then(m=>m.ProductsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
