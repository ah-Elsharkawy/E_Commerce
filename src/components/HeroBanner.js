import React from 'react'
import watch from '../assets/watch_1.webp'

const  Header = (props) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>small text</p>
        <h3>mid text</h3>
        <img src={watch} alt="headphones" className='hero-banner-image'/>
      </div>

      <div>
        <a href='/product/ID'>
          <button type= "button">btn Text</button>
        </a>
        <div className='desc'>
          <h5>Description</h5>
          <p>description text</p>
        </div>
      </div>
    </div>
  )
}

export default Header