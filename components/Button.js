import React from 'react'
import classnames from 'classnames'

function MktoButton({ style, className }) {
  return (
    <a
      href="https://google.com"
      target="_blank"
      className={classnames('btn btn-sm mkto-btn', className)}
      style={{ width: 200, ...style }}
    >
      BUTTON
    </a>
  )
}

export default MktoButton
