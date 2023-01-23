import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <p>
            <a href ="/">Jsm headphones</a>
        </p>
        <button className='cart-icon' onClick="">
            <AiOutlineShoppingCart/>
            <span className='cart-item-qty'>
                1
            </span>
        </button>
    </div>
  )
}

export default Navbar