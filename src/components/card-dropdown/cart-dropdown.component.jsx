import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item-container'></div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;