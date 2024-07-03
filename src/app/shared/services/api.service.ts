import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiUrl='https://fakestoreapi.com';

  //get
  get(target:string,options?:{}):Observable<any>{
    return this.http.get(this.apiUrl+target,options)
  }

    //post
    post(target:string,obj:any,options?:{}){
      return this.http.post(this.apiUrl+target,obj,options);
    }

    put(target:string,obj:any,options?:{}){
      return this.http.put(this.apiUrl+target,obj,options);
    }

    delete(target:string,options?:{}){
      return this.http.delete(this.apiUrl+target,options);
    }


}
