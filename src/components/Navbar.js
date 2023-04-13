import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Cart from './Cart';
import { ProductsContext } from '../contexts/ProductsContext';

const Navbar = () => {
  let {showCart, setShowCart, totalQty} = useContext(ProductsContext);
  const [token, setToken] = useState(localStorage.getItem("token") !== "undefined")

useEffect(() =>{
  setToken(localStorage.getItem("token") !== "undefined");
  console.log("token changed", token)
},[token])

  
  
  return (
    <div className='navbar-container'>
        <div className="d-flex flex-row">

        <Link className='ms-1' to= "/">Home</Link>
        
        {token && <Link className='ms-1' to= "/login"><Button className='m-0' size= "sm"  variant="outline-primary">  Login </Button> </Link> }

        <Link className='ms-1' to= "/SignUp"><Button className='m-0' size= "sm"  variant="outline-primary">  SignUp  </Button> </Link>
        
        </div>

        
        <button className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart/>
            <span className='cart-item-qty'>
                {totalQty}
            </span>
        </button>

        
        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar