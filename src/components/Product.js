import React from 'react'
import watch from '../assets/watch_1.webp'

const Product = (props) => {
  return (
    <div>
      <a href='/'>
        <div className='product-card'>
          <img 
          src={props.product.image} 
          alt="product "
          width={250} height={250}
          className='product-image'
          />
          <p className='product-name'>{props.product.title.split(" ")[0]}</p>
          <p className='product-price'>${props.product.price}</p>
        </div>
      </a>
    </div>
  )
}

export default Product