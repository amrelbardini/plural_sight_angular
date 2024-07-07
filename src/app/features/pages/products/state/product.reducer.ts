import { Product } from "src/app/models/product";
import * as fromRoot from '../../../../state/app.state'

export interface State extends fromRoot.State{
  products:ProductState
}
// productState state
export interface ProductState{
  showProductCount:boolean;
  currentProduct:Product | null;
  products:Product[];
}

//intial state
const intialState:ProductState={
  showProductCount: true,
  currentProduct:null,
  products:[]

}

export function reducer(state:ProductState=intialState,action:any):ProductState{

  switch(action.type){



  case 'TOGGLE_PRODUCT_COUNT':
    console.log(state)

    return {
      ...state, // copy state
      showProductCount:action.payload // apply state changes
    };



    default:
       return state;
  };
}
