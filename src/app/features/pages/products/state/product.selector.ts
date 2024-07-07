import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';


export const selectProductsState = createFeatureSelector<ProductState>("products");

export const selectAllProducts = createSelector(
  selectProductsState,
  (state:ProductState) => state.products
);
