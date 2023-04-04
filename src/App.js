import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import Layout from './components/Layout'
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import ProductsProvider from './contexts/ProductsContext';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          
        </Routes>
      </Layout>
      </ProductsProvider>
    </div>
  );
}

export default App;
