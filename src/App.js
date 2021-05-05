import './App.css';
import Parent from './Parent'
import counterContext from './counterContext';
import { useState } from 'react';

function App() {
  let countState= useState(1);
  
  //let [count, setCount] = useState(30)
  return (
    <counterContext.Provider value={countState}>
      <div>
        <Parent/>
      </div>
    </counterContext.Provider>
    
  );
}

export default App;
