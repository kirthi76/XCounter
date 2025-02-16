import React, { useState } from 'react';

function XCounter() {


const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}

function decrement() {
  setCount(count - 1);
}

return (
  <div>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);
}


export default XCounter;