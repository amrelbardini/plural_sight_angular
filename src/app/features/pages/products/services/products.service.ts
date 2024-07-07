import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/shared/services/api.service';
import { selectAllProducts } from '../state/product.selector';
import * as fromProduct from '../state/product.reducer'



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


getCheckedValue(): Observable<any>{
 return this.store.pipe(select(selectAllProducts));
}
  // dispatch an action to update check value

  checkChanged(value:boolean):void{
    console.log("ACTION DISPATCHED!")
    this.store.dispatch({
      type:'TOGGLE_PRODUCT_COUNT',
      payload:value
    });
  }

}
