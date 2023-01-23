import './App.css';
import Home from './components/Home';
import Layout from './components/Layout'
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Layout>
        <ProductDetails/>
      </Layout>
    </div>
  );
}

export default App;
