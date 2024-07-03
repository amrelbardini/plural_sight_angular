import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {



  private addProductSubscription!:Subscription
  private currentUrlParams!:Subscription
  private id:Number=0;
  public isAddShown:boolean=false;



  constructor(private route:ActivatedRoute,private productsService:ProductsService) { }
  ngOnInit(): void {

    this.currentUrlParams= this.route.params.subscribe(params=>{
       this.id=+params['id']

       if(this.id===0){
        //show add component
        this.isAddShown=true;


       }else{
        //show edit component
        this.isAddShown=false;


       }

    })



  }



  addProduct(){
    let product:Product=new Product();
    product.category="new category";
    product.title="new product";
    product.description="new product description to be add here, hopefully it will work!";
    product.image="https://www.imdb.com/title/tt2098220/mediaviewer/rm3767801089/?ref_=tt_ov_i";
    product.price=345;
    product.rating.rate="4";
    product.rating.count=120;

    console.log(product)

    //call BE
    this.addProductSubscription= this.productsService.addProduct(product).subscribe(data=>{console.log(data)},err=>console.log(err))

  }

  editProduct(){
    console.log("edit product is requested!")
  }

  ngOnDestroy(): void {
     this.currentUrlParams.unsubscribe();
     if( this.addProductSubscription){
      this.addProductSubscription.unsubscribe();
     }


  }

}
