import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable, Subscription } from 'rxjs';

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
  private productSubscription!:Subscription;

  ngOnInit(): void {
    this.productSubscription=this.products$.subscribe(products=>{
      console.log(products)
      return products;
    })

  }

  deleteProduct(productId:number):void{
    console.log(productId)
  }

 ngOnDestroy(): void {
   this.productSubscription.unsubscribe();
 }
}
