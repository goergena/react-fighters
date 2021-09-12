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
    this.setState((prevState)=> {
      return {
        enemyHealth: prevState.enemyHealth -= prevState.fighterAttack
      }
    })
    /* 
    Round counter increments 1
      subtract: enemy health - fighterAttack
      timeout, shake animation
      message: X attacked! Y took X damage!
      Y health glows red at new value

     either Y dies OR counter attack:
      subtract: fighter health  - enemy Attack
      timeout, shake animation
      message: Y attacked! X took Y damage!
      X health glows red at new value

      X dies OR X can attack again

    */
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
