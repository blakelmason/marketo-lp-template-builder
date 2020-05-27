import React from 'react'

function Button({ children, style, className }) {
  const classes = ['btn', 'btn-sm', 'btn-custom'].join(' ')
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
