import { useDispatch } from 'react-redux'

import { Product } from './generated'
import { AddToCartAction, SetCurrentProductAction } from './types'

export type useGenericHook<T> = () => (product: T) => void

// redux hooks to be used throughout the application

export const useAddToCartHook: useGenericHook<Product> = () => {
  const dispatch = useDispatch()

  return (product: Product) => {
    const action: AddToCartAction = {
      type: 'ADD_TO_CART',
      payload: product,
    }
    dispatch(action)
  }
}

export const useSetCurrentProduct: useGenericHook<Product> = () => {
  const dispatch = useDispatch()

  return (product: Product) => {
    const action: SetCurrentProductAction = {
      type: 'SET_PRODUCT',
      payload: product,
    }
    dispatch(action)
  }
}
