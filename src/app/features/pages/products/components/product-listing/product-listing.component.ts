import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable, Subscription } from 'rxjs';
import { CheckboxControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit, OnDestroy {
  //controls the spinner
  public isLoading:boolean=false;

  constructor(private productsService:ProductsService) { }

  products$:Observable<any>=this.productsService.getAllProducts();

  ngOnInit(): void {


  }

  deleteProduct(productId:number):void{
    this.productsService.deleteProduct(""+productId).subscribe(data=>{
      console.log(data)
    })
  }

  isChecked:boolean=false

  hideProduct(ev:any){
    console.log("checked hide product!!!")
    console.log(ev.checked)


  }

 ngOnDestroy(): void {

 }
}
