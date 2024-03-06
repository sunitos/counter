import React, { useState } from 'react'

const FuncComp = (props) => {
  const [count, setCount] = useState(5);
  const [status, setStatus] = useState('');
  const plus = () => {
    setCount((count) => count + 1)
  };
  const minus = () => {
    setCount((count) => count - 1)
  };



    return (
      <div>
        <h2>Func Component</h2>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={props.onKill}>kill</button>
      </div>
    )
  }

  export default FuncComp