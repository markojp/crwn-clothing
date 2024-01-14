import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  const cartItemElements = cartItems.map((cartItem) => {
    return <CartItem key={cartItem.id} cartItem={cartItem} />;
  });
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>{cartItemElements}</div>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
