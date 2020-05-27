import React from 'react'
import id from '../util/id'

export default function MktoText({ children, name }) {
  return (
    <div className="mktoText" id={id(name)} mktoname={name}>
      {name} {children && '. ' + children}
    </div>
  )
}
