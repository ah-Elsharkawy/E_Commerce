import React, { useContext, useRef, useState } from 'react'
import { AiOutlineAim, AiOutlineDelete, AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping,  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../contexts/ProductsContext';

const Cart = () => {
  
  let {setCartItems, setShowCart, cartItems, totalQty, totalPrice, incCartItem, decCartItem, findProductInCart, setProductQty, productQty, removeCartItem} = useContext(ProductsContext);

  

  return (
    <>
    <div className='cart-wrapper'>
      <div className='cart-container' >
        <button className='cart-heading' type='button' onClick={() =>setShowCart(false)}>
          <AiOutlineLeft/>
          <span  className='heading' >Your Cart</span>
          <span className='cart-num-items'>{`(${totalQty})items`}</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping cart is empty </h3>
            <Link to='/' onClick={() => setShowCart(false)} >
              <button type="button" className='btn' style={{background:"#f02d34"}} >
                Continue shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && (
            cartItems?.map((item) => (
              <div className='product' key={item?.id}>
                <img src={item?.image} 
                className = "cart-product-image"
                />
                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item?.title.split(" ")[1]}</h5>
                    <h4>${item?.price}</h4>
                  </div>
                  <div className='flex bottom'>
                    <div>
                    <p className='quantity-desc'>
                      <span className='minus' onClick={() => decCartItem(findProductInCart(item?.id))}>
                        <AiOutlineMinus/>
                      </span>
                      <span className='num'>
                          {productQty[findProductInCart(item?.id)]}
                      </span>
                      <span className='plus' onClick={() => incCartItem(findProductInCart(item?.id))}>
                          <AiOutlinePlus/>
                      </span>
                    </p>
                    </div>
                    <button type="button" className='remove-item' onClick={() => removeCartItem(findProductInCart(item?.id))}>
                      <AiOutlineDelete/>
                    </button>
                  </div>

                 
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal: </h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' style={{background:"orange"}} onClick={() => {
                setCartItems([])
                setProductQty(new Array(30).fill(0))
                
                }}>
                Buy now
              </button>
            </div>

          </div>
        )}
      </div>

    </div>
    
    </>
    
  )
}

export default Cart