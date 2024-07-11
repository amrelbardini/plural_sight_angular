import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/shared/services/api.service';
import { selectShowProductCountState } from '../state/product.selector';
import * as fromProduct from '../state/product.reducer'
import {  ToggleProductCount } from '../state/product.action';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService:ApiService, private store:Store<fromProduct.ProductState>) { }

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

//selector
getCheckedValue(): Observable<any>{
 return this.store.pipe(select(selectShowProductCountState));
}
  // dispatch an action to update check value

  checkChanged(value:boolean):void{
   //sending an instance of a class instead of object literal ensures that the action will be dispatched correctly everytime!
    this.store.dispatch(new ToggleProductCount(value));
  }

}
