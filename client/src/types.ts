import { useSetCurrentProduct } from './useDispatchHooks'
import { Product } from './generated'

// Redux Actions

export interface AddToCartAction {
  type: 'ADD_TO_CART'
  /*
   * ADD TO CART ACTION
   */
  payload: Product
}

export interface SetCurrentProductAction {
  type: 'SET_PRODUCT'
  /*
   * ADD TO CART ACTION
   */
  payload: Product
}

export type RootAction = AddToCartAction | SetCurrentProductAction

export interface cartItem {
  quantity: number
  product: Product
}

export interface RootState {
  cart: cartItem[]
  currentProduct: Product
}
