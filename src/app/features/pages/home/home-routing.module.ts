import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoogleMapsDemoComponent } from './components/google-maps-demo/google-maps-demo.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {path:"",component:HomeComponent,
    children:[
      { path: "", redirectTo: "leaflet", pathMatch: "full" }, // Default route
      {path:"leaflet", component:MapComponent},
      {path:"google", component:GoogleMapsDemoComponent},

  ],


  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
