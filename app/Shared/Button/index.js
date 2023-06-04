import React from 'react'

const Button = ({ children, className, onClick, disabled = false }) => {
  return (
    <button
      className={`shadow-xl font-semibold rounded-xl  px-20 h-[40px] cursor-pointer transition hover:scale-105 ease-in-out ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
