import React from 'react';
import './UserInput.css';

const userInput=(props)=>{
    return (
    <div className="UserInput">
    <strong>{props.name}</strong>
    <br/>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
    )
};

export default userInput;