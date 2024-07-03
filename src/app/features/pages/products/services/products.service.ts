import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService:ApiService) { }

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
}
