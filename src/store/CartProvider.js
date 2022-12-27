import CartContext from "./cart-context"
import React, { useState } from "react"
const CartProvider = (props) => {
       const [items, updateItems] = useState([])
  const addItemToCartHandler = (item) => {
     updateItems([...items, item])
    console.log('inside addItemToCartHandler', cartContext)
  }

  const removeItemFromCartHandler = id => {}


  const cartContext = {
    items:items,
    addItem: addItemToCartHandler ,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider value={cartContext}>
    {console.log('inside CartOnctextProvider', cartContext)}
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;