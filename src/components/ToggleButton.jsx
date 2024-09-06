import React, { useState } from "react";
const ToggleButton = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <button onClick={handleOpen}>
      {open ? 'Open' : 'Close'}
    </button>
  )
}

export default ToggleButton