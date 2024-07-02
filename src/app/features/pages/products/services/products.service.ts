import { Injectable } from '@angular/core';
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

  addProduct(product:object,options?:object){
    return this.apiService.post(this.context,product,options);
  }

  updateProduct(product:object,options?:object){
    return this.apiService.put(this.context,product,options);
  }

  deleteProduct(id:string,options?:object){
    return this.apiService.put(this.context+id,options);
  }
}
