import React from 'react'
import watch from '../assets/watch_1.webp'

const  Header = (props) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{props.product.smallText}</p>
        <h3>{props.product.MidText}</h3>
        <img src={watch} alt="headphones" className='hero-banner-image'/>
      </div>

      <div>
        <a href='/product/ID'>
          <button type= "button">{props.product.btnText}</button>
        </a>
        <div className='desc'>
          <h5>{props.product.desc}</h5>
          <p>{props.product.descT}</p>
        </div>
      </div>
    </div>
  )
}

export default Header