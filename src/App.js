import Fighter from './components/Fighter';
import './App.css';
import React from 'react';

// function App() {
//   return (

//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.attack = this.attack.bind(this)
    this.state = {
      fighterHealth: 100,
      enemyHealth: 150,
      fighterAttack: 20,
      enemyAttack: 15
    }

  }

  attack() {
    console.log(this.state.enemyAttack)
    //
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">

        <p>
         Welcome to my fighting game!
        </p>
        <Fighter/>
        <button onClick={this.attack}>Attack</button>


      </header>

    </div>
    )
  }
}

export default App;
