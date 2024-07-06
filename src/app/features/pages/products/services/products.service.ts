import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService:ApiService, private store:Store) { }

  private context='/products/'

  getAllProducts(){
    return this.apiService.get(this.context);
  }
  getProduct(id:number):Observable<Product>{
    return this.apiService.get(this.context+id);
  }

  addProduct(product:object,options?:object){
    return this.apiService.post(this.context,product,options);
  }

  updateProduct(product:object,options?:object){
    return this.apiService.put(this.context,product,options);
  }

  deleteProduct(id:string,options?:object){


    return this.apiService.delete(this.context+id,options);
  }

  // dispatch an action to update check value

  checkChanged(value:boolean):void{
    this.store.dispatch({
      type:'TOGGLE_PRODUCT_CODE',
      payload:value
    });
  }

}
