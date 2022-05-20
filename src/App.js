import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './views/Home/Home'
import Products from './views/Products/Products'
import Contact from './views/Contact/Contact'
import ItemDetails from './views/Category/Category'
import Cart from './views/Cart/Cart'
import Category from './views/Category/Category'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Details from "./views/Details/Details"

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <NavBar/>
        <Routes>
          <Route exact path="*" element={ <Category/> }/>
          <Route exact path="/products" element={ <ItemListContainer/> }/>
          <Route exact path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route exact path="/category/:categoryId" element={ <Category/> }/>
          <Route exact path="/contact" element={ <Contact/> }/>
          <Route exact path="/cart" element={ <Cart/> }/>
        </Routes>
      </BrowserRouter>
    )


      {/* <Header />
      <NavBar />
      <ItemListContainer greeting="Nuestros Productos"/>  
      <div>
        <ItemDetailContainer/>
      </div> */}
}
export default App;
