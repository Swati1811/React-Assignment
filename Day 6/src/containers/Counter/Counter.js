import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment,decrement,add,subtract,store,deleteId} from '../../store/actions/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr></hr>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(strResult=>(
                         <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>

                    ))}
                   
                </ul>
            </div>
        );
    }
}

const mapStatetoProps=state=>{
    return{
        ctr:state.ctr.counter,
        storedResult:state.res.results
    };
}

const mapDispatchtoProps=dispatch=>{
    return{
        onIncrementCounter:()=> dispatch(increment()),
        onDecrementCounter:()=> dispatch(decrement()),
        onAddCounter:()=> dispatch(add(5)),
        onSubtractCounter:()=> dispatch(subtract(5)),
        onStoreResult:(result)=> dispatch(store(result)),
        onDeleteResult:(id)=> dispatch(deleteId(id))
    };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);