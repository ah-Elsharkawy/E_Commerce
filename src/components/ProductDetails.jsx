import React, { useEffect, useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus, AiOutlineStar, AiFillStar} from 'react-icons/ai';
import Product from './Product';
import axios from 'axios'

const ProductDetails = (props) => {

  const [products, setProducts] = useState();

 

  useEffect( ()=>{
    
    axios.get("https://fakestoreapi.com/products")
    .then(
      (res) => {setProducts(res.data)
      console.log(products)
      }
    )
   
  },[])

  
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src="data:image/jpeg;base64,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" alt="watch" />
                </div>
                <div className='small-images-container'>
                    
                </div>
                <div className='product-detail-desc'>
                  <h1>Prouct name</h1>
                  <div className='reviews'>
                    <div>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiOutlineStar/>
                    </div>
                    <p>
                      (20)
                    </p>
                  </div>
                  <h4>Details: </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum soluta repellendus blanditiis cum vel veritatis repudiandae quia animi quasi culpa fugiat laudantium mollitia dolorem eos sed temporibus, est inventore.</p>
                  <p className='price'> 10$</p>
                  <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                      <span className='minus' onClick="">
                        <AiOutlineMinus/>
                      </span>
                      <span className='num'>
                          0
                      </span>
                      <span className='plus' onClick="">
                          <AiOutlinePlus/>
                      </span>
                    </p>
                  </div>
                  <div className='buttons'>
                    <button type="button"
                    className='add-to-cart'
                    onClick="">
                      Add To Cart
                    </button>
                    <button type='button'
                    className='buy-now' onClick="">
                       Buy now                 
                    </button>
                  </div>
                </div>
                <div className='maylike-products-wrapper'>
                  <h2>You may also like</h2>
                  <div className='marquee'>
                    <div className='maylike-products-container track'>
                    {products?.map((item) => {
                      return <Product key= {item.id} product={item}/>
                     })}
                    </div>
                  </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails