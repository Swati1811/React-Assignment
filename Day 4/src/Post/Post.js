import React from 'react';
import './Post.css';

const post=(props)=>(
     <div className="Post"  onClick={props.clicked}>
        <h3>{props.title} </h3>
        <p className="Info"></p>
        <p className="Author">{props.author}</p>
    </div>
);

export default post;