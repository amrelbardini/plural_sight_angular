import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet';



@NgModule({
  declarations: [
    HomeComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LeafletModule

  ]
})
export class HomeModule { }
