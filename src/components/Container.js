import React from 'react'
import classnames from 'classnames'

export default function Container({ children, classNames, style }) {
  return (
    <div
      className={classnames('container-fluid mx-auto', classNames)}
      style={{ maxWidth: 1200, ...style }}
    >
      {children}
    </div>
  )
}
