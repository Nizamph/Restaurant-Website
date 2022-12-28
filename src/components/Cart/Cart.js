import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
const Cart = (props) => {

  const cartCntxt = useContext(CartContext)

  const increaseQuantityHandler=(item)=> {
    cartCntxt.addItem({...item,quantity:1})
  }

  const decreaseQuantityHandler=(item) => {
    cartCntxt.removeItem(item)
  }

 





  const hasItem = cartCntxt.items.length>0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntxt.items.map((item) => {
      return  <li key={item.id} className={classes.li}>
          <div>
            <h3>{item.name}</h3>
            <span className={classes.quantity}>x{item.quantity}</span>
            <div className={classes.price}>{item.price.toFixed(2)}</div>
          </div>


          <div>
            <button className={classes.decrease} onClick={()=>decreaseQuantityHandler(item)}>-</button>
            <button className={classes.increase} onClick={()=>increaseQuantityHandler(item)}>+</button>
          </div>
          </li>
})}
    </ul>
  );

  let amount = 0;
 cartCntxt.items.forEach((item) => {
    amount = amount+Number(item.price*item.quantity)
 });
 
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${amount.toFixed(2)}</span>
     
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;