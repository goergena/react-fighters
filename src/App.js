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
    this.counterAttack = this.counterAttack.bind(this)
    this.state = {
      fighterHealth: 100,
      enemyHealth: 150,
      fighterAttack: 20,
      enemyAttack: 15,
      round: 0
    }

  }

    
    

    /* 
    Round counter increments 1
      subtract: enemy health - fighterAttack
      timeout, shake animation
      message: X attacked! Y took X damage!
      Y health glows red at new value

      maybe call counterattack and check if enemy dies in a lifecycle event
      componentDidUpdate 
      so that the health changes first BEFORE counterattack
      since state updates are asynch
      //separate enemy out as a separate component and use prevProps

     either Y dies OR counter attack:
      subtract: fighter health  - enemy Attack
      timeout, shake animation
      message: Y attacked! X took Y damage!
      X health glows red at new value

      X dies OR X can attack again

    */

  attack() {
    
    console.log(this.state.enemyAttack)
    this.setState((prevState)=> {
      return {
        enemyHealth: prevState.enemyHealth - prevState.fighterAttack,
        round: prevState.round +1
      }
    })


  }

  counterAttack () {
    console.log('counterattack')
    this.setState((prevState)=> {
      return {
        fighterHealth: prevState.fighterHealth - prevState.enemyAttack
      }
    })
    if (this.state.fighterHealth <=0) {
      console.log('fighter dead! enemy wins')
    }
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">

        <p>
         Welcome to my fighting game!
        </p>
        <p> round #: {this.state.round}</p>
        <Fighter/>
        <p>Fighter health: {this.state.fighterHealth}</p>
        <Enemy enemyHealth= {this.state.enemyHealth} counterAttack={this.counterAttack} />
        <button onClick={this.attack}>Attack</button>


      </header>

    </div>
    )
  }
}

class Enemy extends React.Component {
  constructor(props) {
    super(props)
    this.enemyDeath = this.enemyDeath.bind(this)
  }
  componentDidUpdate(prevProps) {
    //this.props.counterAttack()
    if(prevProps.enemyHealth >=0) {
      this.props.counterAttack()
    } else {
      this.enemyDeath()
    }
  }
  enemyDeath() {
    console.log('enemy is dead')
  }

  render() {
    return (
      <div>
        <p>enemy health: {this.props.enemyHealth}</p>
      </div>
    )
  }
}


export default App;
