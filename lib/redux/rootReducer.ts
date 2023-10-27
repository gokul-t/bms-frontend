/* Instruments */
import { counterSlice } from './slices'
import { bookApi } from './services'

export const reducer = {
  counter: counterSlice.reducer,
  [bookApi.reducerPath]: bookApi.reducer
}
