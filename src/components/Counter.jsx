import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setTimeout(() => {
      setCount(prevState => prevState + 1)
    }, 1000)
  }

  const countDown = () => {
    setTimeout(() => {
      setCount(prevState => prevState - 1)
    }, 1000)
  }

  return (
    <div>
      <p>right count with prevState: {count}</p>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
    </div>
  )
}

export default Counter