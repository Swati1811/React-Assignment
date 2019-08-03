import React,{Component} from 'react';
import './App.css';
import Student from './Student/Student';

class App extends Component
{
  state={
    student:[
      { name: 'Sunil', dept:'IT'},
      { name: 'Umesh', dept:'Computer'}
    ]
  }


  render(){
    return(
    <div className={App}>
      <h1>Day 3 Assignment</h1>
      <Student name={this.state.student[0].name} dept={this.state.student[0].dept} />
      <Student name={this.state.student[1].name} dept={this.state.student[1].dept} />


    </div>
    );
  }
}
export default App;
