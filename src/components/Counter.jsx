import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>decrement</button>
    </div>
  );
};


export default Counter
