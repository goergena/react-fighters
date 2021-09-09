import logo from './logo.svg';
import irina from './images/irina.png'
import Fighter from './components/Fighter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
         Welcome to my fighting game!
        </p>
        <Fighter/>
        <img src={irina} alt="Irina-sensei"/>
      </header>

      
      <img/>
      <img/>
    </div>
  );
}

export default App;
