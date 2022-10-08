import './App.css';
import Header from './components/Header';
import Catalog from './components/Catalog';
import SubmitFoods from './components/SubmitFoods';

function App() {
  return (
    <div className="App">
      <Header/>
      <Catalog/>
      <SubmitFoods/>
    </div>
  );
}

export default App;
