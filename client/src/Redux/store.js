import {configureStore} from '@reduxjs/toolkit'
import  cart  from './CartSlice'
 export const store = configureStore({
    reducer:{
     cart: cart
    }
})
export default store 