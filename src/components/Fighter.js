import React from "react";
import Irina from '../images/irina.png';

class Fighter extends React.Component {
    render() {
        return (
            <div>
                <img src={Irina}/>
                <p>Fighter health: {this.props.fighterHealth}</p>

            </div>
        )
    }
}

export default Fighter;