import React from "react";
import Karasuma from '../images/karasuma.png';

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

  export default Enemy;