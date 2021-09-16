import React from "react";
import Irina from '../images/irina.png';
import './Fighter.css';

const Fighter = (props) => {

    return (
        <div className={props.shake && 'shake'}>
            <img src={Irina}/>
            <p>Fighter health: {props.fighterHealth}</p>

        </div>
    )    
}

export default Fighter;