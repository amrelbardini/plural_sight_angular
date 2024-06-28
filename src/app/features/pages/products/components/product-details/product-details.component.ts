import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  id:number=0;

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.id=+params['id']
      console.log(params['id'])
    })
  }

}
