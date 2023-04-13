# App Documentation

## Overview

This is a basic e-commerce React app that allows users to browse items, add them to their cart, and checkout. The app consists of several components, including Home, Login, Register, Item Details, and Cart.

## Getting Started

To run the app, you must have Node.js installed on your machine. Clone the repository and navigate to the root directory. Run the following command to install the necessary dependencies:

```text
npm install
```

Once the installation is complete, run the following command to start the development server:

```text
npm start
```

The app will open in your default browser at [port:3000](http://localhost:3000) in your local host.

## Technologies Used

* React
* React Router
* Axios
* React Bootstrap
* Context API

## State management

The app utilizes the Context API to manage the global state of the app, including the products data, and the items in the cart.
we have only one context that nanages that app date, the ProductsContext.
it includes the following states:

```javascript
let [products, setProducts] = useState([]);
let [showCart, setShowCart] = useState(false);
let [cartItems, setCartItems] = useState([]);
let [totalQty, setTotalQty] = useState(0);
let [totalPrice, setTotalPrice] = useState(0);
let [productQty, setProductQty] = useState(new Array(30).fill(0))
```

and functions to manage those states like:
for the cart we have the following functions:

```javascript
findProductInCart(id) // returns the index if exists and -1 if not
incCartItem(index)    // increment the cart item quantity by one
decCartItem(index)    // decrement the cart item quantity by one
removeCartItem(index) // remove an item from the cart 
calcTotalQty()        // calculate the total quantity of cart items
calcTotalPrice()      // calculate the total price of cart items
```

To manage the cart we needed two arrays, one for setting the item and the other for the item quantity.
as long as we can't mutate a part of a state every time we have a change we need to set the whole cart with the one change like this:

```js
function removeCartItem(index)
    {
      setCartItems([...cartItems.slice(0,index), ...cartItems.slice(index+1)]);
      setProductQty([...productQty.slice(0,index), ...productQty.slice(index+1), 0]);
    }
```

we add the first part of the array then the changed item then the rest of the array

it's not the optimal way we can replace the two arrays with an array of objects but still one modification lead to setting the array as a whole.

## Components

### Layout

The Layout component is the main component having two fixed components: the navbar and the footer and one variaple component which is the main ... the main contains the current page.

### Home

The Home Page component displays the current products available for purchase also banners as headers and footers.

### Navbar

The Navbar component contains the Login and SignUp buttons, as well as the cart icon. Users can log in or sign up to access their account and manage their cart.

### Login

The Login component allows users to log in to their account. Users can enter their email and password to access their account and manage their cart.

### SignUp

The Sign Up component allows users to sign up for a new account. Users can enter their email, password, and other personal information to create an account and start shopping.

### Product Details

The Product Details component displays the details of a particular product, including its name, description, and price. Users can add the product to their cart or continue browsing other products, it also contains a may like product track that stops once hovering over an item.

### Cart

the cart component displays the purchased products ... you can increase the number of items, decrease or remove the whole item.
also a button to buy using an online payment but the functionality isn't added yet.

## Authentication and Authorization

### Authentication

The App provides authentication for the logged users, after logging in the user gets a token(JWT) that is saved in the local storage which means no need to login every time from the same browser.

### Authorization

It also provides authorization using the JWT as it defines whether the user is admin or not anyway the backend handles it, the app just sends it with the request and get the response with the required info.

## Styling

The styling is pure css but in the forms used react bootstrap.

## To be added

1. **forms validation**: though i have form validation in the backend but will add it in the front also.
2. **toasts**: adding toasts to notify the user when they take an action like adding product to the cart or removing.
3. **Admin functions**: adding functions for adding, removing or updating products but only for admin.
