import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./Context/CartContext"
import Home from './views/Home/Home';
import Products from "./views/Products/Products";
import Category from './views/Category/Category';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Cart from './views/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Error404 from './views/Error404/Error404';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
        <Header/>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/products" element={ <Products/> }/>
            <Route exact path="/category/:categoryId" element={ <Category/> }/>
            <Route path="/category/:categoryId" element={ <Error404/> }/>
            <Route exact path="/item/:itemId" element={ <ProductDetail/> }/>
            <Route exact path="/cart" element={ <Cart/> }/>
            <Route exact path="/checkout" element={ <CheckOut/> }/>
            <Route path="*" element={ <Error404/> }/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    )
}
export default App;
