import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  constructor(private router:ActivatedRoute, private productsService:ProductsService) { }

  id:number=0;

  public product$:Observable<any>=this.productsService.getProduct(this.id);
  private productSubscription!:Subscription

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.id=+params['id']
      this.product$=this.productsService.getProduct(this.id);
    })

    this.productSubscription=this.product$.subscribe(productData=>{
      console.log(productData)
      return productData;
    })
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}
