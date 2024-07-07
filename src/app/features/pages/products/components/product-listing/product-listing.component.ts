import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit, OnDestroy {
  /*
    PUBLIC REGION
   */

  public products$: Observable<any> = this.productsService.getAllProducts();
  public showProductCount: boolean = false;

  /*
   END PUBLIC REGION
   */

  //private region
  private productSliceSubscription!: Subscription;
  private deleteProductSubscription!:Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productSliceSubscription = this.productsService
      .getCheckedValue()
      .subscribe((showProductState) => {
        console.log(showProductState);
        this.showProductCount = showProductState;
      });




  }

  deleteProduct(productId: number): void {
   this.deleteProductSubscription= this.productsService.deleteProduct('' + productId).subscribe((data) => {
      console.log(data);
    });
  }

  showProductsCount(ev: any) {
    //dispatch action using product service
    this.productsService.checkChanged(ev.checked);
  }

  ngOnDestroy(): void {
    //unsubscribe
    this.productSliceSubscription.unsubscribe();
    if(this.deleteProductSubscription){
      this.deleteProductSubscription.unsubscribe();
    }
  }
}
