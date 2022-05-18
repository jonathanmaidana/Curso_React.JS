import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="miApp">
      <Header />
      <NavBar />
      <ItemListContainer greeting="Nuestros Productos"/>  
      <div>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
