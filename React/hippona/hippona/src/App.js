
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Caja from './components/Caja/Caja'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <ItemListContainer greeting="TODOS LOS PRODUCTOS"/>
      <Caja greeting="  "/>
      <ItemCount/>
    </div>
  );
}

export default App;
