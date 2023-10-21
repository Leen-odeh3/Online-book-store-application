import React, { Children } from 'react'
import CartContext from './CartContext'

const CartProvider = ({children}) => {
  return (
   <CartContext.Provider >
    {Children}
   </CartContext.Provider>
  )
}

export default CartProvider
