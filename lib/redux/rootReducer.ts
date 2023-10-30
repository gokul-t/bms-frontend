/* Instruments */
import { counterSlice } from './slices'
import { bookApi, productApi } from './services'

export const reducer = {
  counter: counterSlice.reducer,
  [bookApi.reducerPath]: bookApi.reducer,
  [productApi.reducerPath]: productApi.reducer
}
