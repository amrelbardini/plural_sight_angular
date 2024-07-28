import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { GoogleMapsDemoComponent } from './components/google-maps-demo/google-maps-demo.component';
import { GoogleMapsModule } from '@angular/google-maps';




@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    GoogleMapsDemoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LeafletModule,
    GoogleMapsModule

  ]
})
export class HomeModule { }
