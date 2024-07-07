import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable, Subscription } from 'rxjs';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectAllProducts } from '../../state/product.selector';


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

  showProductCount:boolean=false;

  ngOnInit(): void {
  this.productsService.getCheckedValue().subscribe(productsSlice=>{
    console.log(productsSlice);
    this.showProductCount=productsSlice.showProductCount;
  });


  }

  deleteProduct(productId:number):void{
    this.productsService.deleteProduct(""+productId).subscribe(data=>{
      console.log(data)
    })
  }



  showProductsCount(ev:any){
   //dispatch action using product service
    this.productsService.checkChanged(ev.checked);
  }

 ngOnDestroy(): void {

 }
}
