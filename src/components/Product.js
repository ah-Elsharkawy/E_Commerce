import React, { useEffect, useState } from 'react'
import watch from '../assets/watch_1.webp'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios';

const Product = (props) => {

  /* let param = useParams();
  console.log(param);

  useEffect( () => {
    axios.get("https://fakestoreapi.com/products/" + param.id)
    .then((res) => {
      setProduct(res.data);
      console.log(res)
    })
  }, []) */
  const product = props.product;
  
  return (
    <div>
      <Link to={`/products/${product?.id}`}>
        <div className='product-card'>
          <img 
          src={product?.image}
          alt="product "
          width={250} height={250}
          className='product-image'
          />
          <p className='product-name'>{product?.title.substr(0,21) + "...."}</p>
          <p className='product-price'>${product?.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product