import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

function ProductsProvider(props){

    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    let [totalQty, setTotalQty] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);
    let [productQty, setProductQty] = useState(new Array(30).fill(0))

    function calcTotalQty(){
      setTotalQty(productQty.reduce((acc, curr) => acc += curr, 0));
      console.log(totalQty)
    }

    function calcTotalPrice(){
      let total = 0;

      for(let i=0; i<cartItems.length; i++){
        total += cartItems[i].price * productQty[i];
      }
      
      setTotalPrice(total)
      console.log(totalPrice)
    }

    function findProductInCart(id){
      let index = cartItems.findIndex((item) => item.id === id);
      return index;
    }

    function incCartItem(index){
      setProductQty([...productQty.slice(0,index), productQty[index]+1, ...productQty.slice(index+1)]);
    }

    function decCartItem(index){
      setProductQty([...productQty.slice(0,index), Math.max(productQty[index]-1, 1), ...productQty.slice(index+1)])
    }

    function removeCartItem(index){
      setCartItems([...cartItems.slice(0,index), ...cartItems.slice(index+1)]);
      setProductQty([...productQty.slice(0,index), ...productQty.slice(index+1), 0]);
    }


    useEffect(() => {
        /* axios.get("https://e-commerce-server-side-production.up.railway.app/products") */
        axios.get("http://localhost:4000/products")
        .then((res) => setProducts(res.data));

        console.log("qty array", productQty);
        console.log("cartItems", cartItems);
        calcTotalQty();
        calcTotalPrice();

    },[productQty])
    
  return (
    <ProductsContext.Provider value={{
      products, showCart, setShowCart, cartItems, setCartItems, totalQty, setTotalQty, totalPrice, setTotalPrice,
      findProductInCart, setProductQty, productQty, calcTotalQty, incCartItem, decCartItem, removeCartItem}} >
        {props.children}
    </ProductsContext.Provider>
    
  )
}

export default ProductsProvider;