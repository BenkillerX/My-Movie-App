import React from 'react'

const Button = () => {
  const style = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '14px 28px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  }
const handleClick= ()=> console.log("OUCH!");

  return (
    <button onClick={handleClick} style={style}>Click Me</button>
  )
}

export default Button
