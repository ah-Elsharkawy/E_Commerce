import React, { useContext, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import FooterBanner from './FooterBanner';
import Product from './Product';
import { ProductsContext } from '../contexts/ProductsContext';
import {useNavigate} from "react-router-dom";
import Login from './Login';

const Home = (props) => {
  const navigate = useNavigate();
  const {products} = useContext(ProductsContext)
  
  console.log(localStorage)
  

  if(localStorage.getItem("token") === 'undefined') return <Login/>
  
  return (
    <div>
        <HeroBanner/>

        <div className='products-heading'>
          <h2>Our products</h2>
        </div>

        <div className='products-container'>
          {products?.map((product)=>(<Product key={product.id} product={product}/>))}
        </div>

        <FooterBanner/>

    </div>
  )
}

export default Home