import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute) { }

  currentUrlParams!:any
  id:Number=0;

  ngOnInit(): void {

    this.currentUrlParams= this.route.params.subscribe(params=>{
       this.id=+params['id']
      console.log(this.id)
    })



  }

  ngOnDestroy(): void {
     this.currentUrlParams.unsubscribe();

  }

}
