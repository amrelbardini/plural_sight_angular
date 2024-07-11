import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { Interceptor } from './shared/interceptors/interceptor';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule, // imported only once in the entire app
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}), // app root reducer

  ],
 // {provide:HTTP_INTERCEPTORS,useClass:Interceptor, multi:true}
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
