import React, { useState, useEffect } from "react";
const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('Current state is', open)
    if (open) {
      console.log('Subscribe database')
    }
    return () => {
      console.log('Unsubscribe database')
    }
  }, [open])

  return (
    <button onClick={handleOpen}>
      {open ? 'Open' : 'Close'}
    </button>
  )
}

export default ToggleButton