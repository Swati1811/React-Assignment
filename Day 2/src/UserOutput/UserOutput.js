import React from 'react';
import './UserOutput.css';

const userOutput=(props)=>{
    return (
    <div className="UserOutput">
    <p>My name is {props.name}</p>
  
    <p>My age is {props.age} years old.</p>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
    )
};

export default userOutput;