import React, { useContext } from 'react';
import counterContext from './counterContext';

const Child=()=>{
    let counterVal = useContext(counterContext)
    
    return(
         <div>
             <h2>Using Counter Context</h2>
             <h4>Counter value is: {counterVal[0]}</h4>
             <button onClick={()=>{counterVal[1](++counterVal[0])}}>
                 Increament Context
            </button>
    </div>
    );
}

export default Child;