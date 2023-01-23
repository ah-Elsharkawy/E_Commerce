import React from 'react';
import HeroBanner from './HeroBanner';
import FooterBanner from './FooterBanner';
import Product from './Product';

const Home = () => {
  let products = [
    {
      id:0,
      name:"watch",
      price:5,
      smallText: "wooow!",
      MidText: "Very Nice",
      btnText: "click me ",
      desc: "Description",
      descT:"very good quality",
    }
  ]
  return (
    <div>
        <HeroBanner product = {products[0]}/>

        <div className='products-heading'>
          <h2>this my website</h2>
          <p>i will do it</p>
        </div>

        <div className='products-container'>
          <Product product={products[0]} />
        </div>

        <FooterBanner/>




    </div>
  )
}

export default Home