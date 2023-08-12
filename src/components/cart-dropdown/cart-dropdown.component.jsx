import React from 'react'
import Button from '../button/button.component.jsx'
import './cart-dropdown.styles.scss'

function CardDropdown() {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
            <Button>GO TO CHECKOUT</Button>
        </div>
    </div>
  )
}

export default CardDropdown
