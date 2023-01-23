import React from 'react'
import watch from '../assets/watch_1.webp'
const FooterBanner = () => {
  let d = new Date().toLocaleTimeString('ar-eg');
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>hi</p>
          <h3>FINE</h3>
          <h3>FINE</h3>
          <p>{d.toString()}</p>

        </div>
        <div className='right'>
          <p>go away</p>
          <h3>still here</h3>
          <h2>go do something</h2>
          <p>Now!!</p>
          <a href={`/products`}>
            <button>
              shop Now
            </button>
          </a>
        </div>

        <img src={watch} alt ="img" className = 'footer-banner-image'/>

      </div>

    </div>
  )
}

export default FooterBanner