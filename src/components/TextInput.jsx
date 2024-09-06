import React, { useState } from "react";

const TextInput = () => {
  const [name, setName] = useState('')
  const handleName = (event) => {
    setName(event.target.value)
  }
  return (
    <input type="text" value={name} onChange={(event) => handleName(event)} />
  )
}

export default TextInput