
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <ItemListContainer greeting="TODOS LOS PRODUCTOS"/>
      <ItemCount></ItemCount>
    </div>
  );
}

export default App;
