import React from 'react'
import id from '../util/id'

export default function MktoImage({ name, children }) {
  return (
    <div className="mktoImg" id={id(name)} mktoname={name}>
      {children}
    </div>
  )
}
