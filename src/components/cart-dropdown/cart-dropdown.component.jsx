import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context.jsx'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component.jsx'
import CartItem from '../cart-item/Cart-item.component.jsx'
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx'

function CardDropdown() {
  const navigate = useNavigate()
  const {cartItems} = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
        <CartItems>
          {
            cartItems.length ? (cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem}/>
              ))) : (
                <EmptyMessage>Your cart is empty!</EmptyMessage>
              )
          }
        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

    </CartDropdownContainer>
  )
}

export default CardDropdown
