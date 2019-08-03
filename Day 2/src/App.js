import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    useroutput:[
      {name:'Kunal', age:22},
      
    ],
    userinput:[
      {name:'Umesh'}
    ]
  }

  switchNameHandler=()=>{
    this.setState({
      useroutput:[
        {name:'Pratik', age:22},
       
      ]
    })
  }

  nameChangedHandler=(event)=>{
    this.setState({
      useroutput:[
        {name:event.target.value, age:22},
        
      ]
    })

  }

  nameChangedHandler1=(event)=>{
    this.setState({
      userinput:[
        {name:event.target.value},
        
      ]
    })

  }

  

  render() {
    const style={
      backgroundColor:'Yellow',
      font:'inherit',
      padding : '8px'
    }
    return (
      
      <div className="App">
        <h1>Assignment2</h1>
        <UserInput  name={this.state.userinput[0].name} change={this.nameChangedHandler1}/>
        <button style={style} onClick={()=>this.switchNameHandler('Nikhil')}>Switch Names</button>
        <UserOutput name="Swati" age="21"/>
        <UserOutput name="Priya" age="25"/>
        <UserOutput name={this.state.useroutput[0].name} age={this.state.useroutput[0].age} change={this.nameChangedHandler}/>
       
      </div>
    );
  }
}

export default App;
