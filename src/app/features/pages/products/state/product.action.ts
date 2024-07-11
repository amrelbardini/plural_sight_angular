import { Action } from "@ngrx/store";
import { Product } from "src/app/models/product";

export enum ProductActionTypes{
  ToggleProductCount='[Product] Toggle Product Count',
  SetCurrentProduct='[Product] Set Current Product',
  ClearCurrentProduct='[Product] Clear Current Product',
  initializeCurrentProduct='[Product] Initialize Current Product',
}
//action creator for toggle  product count

export class ToggleProductCount implements Action {
  readonly type=ProductActionTypes.ToggleProductCount

  constructor(public payload:boolean){}
}
//action creator for set product
export class SetCurrentProduct implements Action{
  readonly type=ProductActionTypes.SetCurrentProduct;
  constructor( public payload : Product){}
}

//action creator for set product
export class InitializeCurrentProduct implements Action{
  readonly type=ProductActionTypes.initializeCurrentProduct;
  constructor(){}
}

//action creator for clear product
export class ClearCurrentProduct implements Action{
  readonly type= ProductActionTypes.ClearCurrentProduct
  constructor(){} // doesn't need a payload since it will set the product to null
}

export type ProductActions=
  ToggleProductCount
| SetCurrentProduct
| ClearCurrentProduct
| InitializeCurrentProduct; // union product action types
