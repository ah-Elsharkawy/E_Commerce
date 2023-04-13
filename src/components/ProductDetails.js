import React, { useContext, useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus, AiOutlineStar, AiFillStar} from 'react-icons/ai';
import Product from './Product';
import { ProductsContext } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
  let id = useParams().id; 
  const {products, setCartItems, cartItems, calcTotalQty, productQty, setProductQty, findProductInCart}  = useContext(ProductsContext);
  const product = products?.filter((p)=>{
    return p.id === parseInt(id);
  })[0];

let [count, setCount] = useState(0);
  
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img className='product-detail-image' src={product?.image} alt="watch" />
                </div>
                
                <div className='product-detail-desc'>
                  <h1>{product?.title}</h1>
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
                  <p>{product?.description}</p>
                  <p className='price'> {product?.price + "$"}</p>
                  <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                      <span className='minus' onClick={() => setCount(Math.max(0, count-1))}>
                        <AiOutlineMinus/>
                      </span>
                      <span className='num'>
                          {count}
                      </span>
                      <span className='plus' onClick={ () => setCount(++count)}>
                          <AiOutlinePlus/>
                      </span>
                    </p>
                  </div>
                  <div className='buttons'>
                    <button type="button" className='add-to-cart' onClick={ () => {
                      let index = findProductInCart(product?.id);
                      if(count !==0){
                        if(index === -1){
                          index = cartItems.length ;
                          setCartItems([...cartItems, product]);
                        
                      } 
                      setProductQty([...productQty.slice(0,index), productQty[index]+count, ...productQty.slice(index+1)]);
                      setCount(0)
                      }}}>


                      Add To Cart
                    </button>
                    
                  </div>
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
  )
}

export default ProductDetails