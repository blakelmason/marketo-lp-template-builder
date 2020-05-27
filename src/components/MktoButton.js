import React from 'react'

function Button({ children, style, className }) {
  const classes = ['btn', 'btn-sm', 'btn-mkto'].join(' ')
  return (
    <button
      className={className ? className + ' ' + classes : classes}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button
