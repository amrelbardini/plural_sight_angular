export function reducer(state:any,action:any){
  switch(action.type){

  case 'TOGGLE_PRODUCT_CODE':
    return {
      ...state, // copy state
      showProductCode:action.payload // apply state changes
    }



    default:
       return state;
  }
}
