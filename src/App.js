import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="miApp">
      <Header />
      <NavBar />
      <ItemListContainer greeting="Nuestros Productos"/>
    </div>
  );
}

export default App;
