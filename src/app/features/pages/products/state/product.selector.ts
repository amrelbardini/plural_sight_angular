import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';


 const selectProductsState = createFeatureSelector<ProductState>("products"); // select feature state slice

export const selectShowProductCountState= createSelector(
  selectProductsState,
  (state:ProductState) => state.showProductCount // select show product count from the entire feature slice state
);
