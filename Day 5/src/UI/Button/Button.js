import React from 'react';

import Classes from './Button.css';

const button=(props)=>{
    return(
        <button className={Classes.Button}

             onClick={props.action}
             type={props.title}>
             {props.title}
        </button>
             

    );

}

export default button;