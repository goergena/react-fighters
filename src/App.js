import Fighter from './components/Fighter';
import './App.css';
import React from 'react';

import Karasuma from './images/karasuma.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.attack = this.attack.bind(this)
    this.counterAttack = this.counterAttack.bind(this)
    this.fighterDeath = this.fighterDeath.bind(this)
    this.enemyDeath = this.enemyDeath.bind(this)
    this.state = {
      fighterHealth: 100,
      enemyHealth: 150,
      round: 0
    }
  }
  fighterAttack = 20;
  enemyAttack= 15;
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
    const newEnemyHealth = this.state.enemyHealth - this.fighterAttack;
    if (newEnemyHealth >0) {
      this.counterAttack()
    } else {
      this.enemyDeath()
    }
    this.setState((prevState)=> {
      return {
        enemyHealth: newEnemyHealth,
        round: prevState.round +1
      }
    })
  }

  counterAttack () {
    const newFighterHealth = this.state.fighterHealth - this.enemyAttack;
    if (newFighterHealth <=0) {
      this.fighterDeath()
    }
    this.setState(()=> {
      return {
        fighterHealth: newFighterHealth
      }
    })
  }

  enemyDeath() {
    console.log('enemy death ' + this.state.enemyHealth)
  }

  fighterDeath() {
    console.log('fighter death ' + this.state.fighterHealth)
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <p>
         Welcome to my fighting game!
        </p>
        <p> round #: {this.state.round}</p>
        <Fighter fighterHealth={this.state.fighterHealth}/>

        <button onClick={this.attack}>Attack</button>
        <Enemy enemyHealth= {this.state.enemyHealth} />
      </header>
    </div>
    )
  }
}

class Enemy extends React.Component {
  render() {
    return (
      <div>
        <img src={Karasuma}/>
        <p>enemy health: {this.props.enemyHealth}</p>
      </div>
    )
  }
}


export default App;