import React from 'react'

export default function MktoText({ children, id, name }) {
  return (
    <div className="mktoText" id={id} mktoname={name}>
      {children}
    </div>
  )
}
