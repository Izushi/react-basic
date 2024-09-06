import React, { useState } from "react";

const BadCounter = () => {
  const [count, setCount] = useState(0)

  // setCount(count + 1)でカウントアップすると、1秒間に5回ボタンを押しても1秒間に1回しかカウントアップされない
  const countUp = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }

  const countDown = () => {
    setTimeout(() => {
      setCount(count - 1)
    }, 1000)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
    </div>
  )
}

export default BadCounter