import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context.jsx'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component.jsx'
import CartItem from '../cart-item/Cart-item.component.jsx'
import './cart-dropdown.styles.scss'

function CardDropdown() {
  const navigate = useNavigate()
  const {cartItems} = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem}/>
            ))}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

    </div>
  )
}

export default CardDropdown
