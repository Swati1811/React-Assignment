import React from 'react';
import { tsPropertySignature } from '@babel/types';

const student=(props)=> {
    return(
        <div>
        <p>My name is {props.name}.</p>
        <p>I am from {props.dept} department.</p>
        </div>
    );

};

export default student;