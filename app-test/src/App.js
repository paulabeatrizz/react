import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const increaseValue = () => {
    setCount(count + 1);
  } 

  const decreaseValue = () => {
    setCount(count - 1);
  } 
  const setToZero = () => {
    setCount(0);
  } 
  

  return (
    <div className="App">
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      {count}
    </div>
  );
}



export default App;
