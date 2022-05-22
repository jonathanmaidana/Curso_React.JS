import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './views/Home/Home'
import Product from './views/Product/Product'
import Contact from './views/Contact/Contact'
import Cart from './views/Cart/Cart'
import Category from './views/Category/Category'

import Products from "./views/Products/Products"

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/products" element={ <Products/> }/>
          <Route exact path="/category/:categoryId" element={ <Category/> }/>
          <Route exact path="/item/:itemId" element={ <Product/> }/>
          <Route exact path="/contact" element={ <Contact/> }/>
          <Route exact path="/cart" element={ <Cart/> }/>
        </Routes>
      </BrowserRouter>
    )
}
export default App;
