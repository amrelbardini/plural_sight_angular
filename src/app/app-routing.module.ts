import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',

    loadChildren: () =>
      import('./features/pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/pages/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'products',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./features/pages/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },

  {
    path: 'messages',
    loadChildren: () =>
      import('./features/messages/messages.module').then(
        (m) => m.MessagesModule
      ),
    outlet: 'popup',
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
