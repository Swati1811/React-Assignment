import React from 'react';
import Classes from './Input.css'

const input=(props)=>{

    
 return(
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.title}</label>
            <input className={Classes.InputElement}
                    type={props.inputType}
                    placeholder={props.placeholder}
                    onChange={props.handlechange}
                    {...props} />
            

        </div>
    );
}

export default input;