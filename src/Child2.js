import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

 const Child2=()=>{

    let  [state, dispatch] = useReducer(CounterReducer,1); 
    return(
        <div>
            <h2>Using Counter Reducer</h2>
            <h4>Value of Reducer state is: {state}</h4>
            <button onClick={()=> dispatch('INCREMENT')}>Increament Reducer</button>
        </div>
    )
 }
 export default Child2;