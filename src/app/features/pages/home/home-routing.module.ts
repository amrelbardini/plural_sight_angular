import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoogleMapsDemoComponent } from './components/google-maps-demo/google-maps-demo.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {path:"",component:HomeComponent,
    children:[
      {path:"google", component:GoogleMapsDemoComponent},
      {path:"leaflet", component:MapComponent}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
