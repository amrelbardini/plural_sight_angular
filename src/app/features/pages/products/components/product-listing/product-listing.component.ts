import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  //controls the spinner
  public isLoading:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(productId:number):void{
    console.log(productId)
  }


}
