import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Observable,Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  constructor(private router:ActivatedRoute, private productsService:ProductsService) { }

  id:number=0;

  public product!:Product
  private productSubscription!:Subscription;
  public starRatingArray:number[]=[];

  setStarRatingArray(number:Number){
    let limit=+number.toFixed();
    for(let i=0;i<limit;i++){
      this.starRatingArray.push(i);
    }

    console.log(this.starRatingArray)

  }


  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.id=+params['id']
      this.productSubscription=this.productsService.getProduct(this.id).subscribe((productData:Product)=>{
        this.product=productData;
        this.setStarRatingArray(+this.product.rating.rate);


      });

    })




  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}
