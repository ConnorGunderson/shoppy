import { applyMiddleware } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import { logger } from 'redux-logger'

import { RootState, RootAction } from './types'

const initialProduct = {
  id: '',
  name: '',
  price: 0,
  image: '',
}

const initialState: RootState = {
  cart: [],
  currentProduct: initialProduct,
}

const reducer = (state: RootState = initialState, action: RootAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { quantity: 1, product: action.payload }],
      }
    case 'SET_PRODUCT':
      // if (!action.payload) return { ...state, currentProduct: initialProduct }
      return {
        ...state,
        currentProduct: { ...action.payload },
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, applyMiddleware(logger))

export type AppDispatch = typeof store.dispatch

// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
