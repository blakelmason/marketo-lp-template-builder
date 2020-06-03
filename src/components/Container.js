import React from 'react'
import classnames from 'classnames'

export default function Container({ children, className, style }) {
  return (
    <div
      className={classnames('container-fluid mx-auto', className)}
      style={{ maxWidth: 1200, ...style }}
    >
      {children}
    </div>
  )
}
