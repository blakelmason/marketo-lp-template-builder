import React from 'react'
import MktoText from './MktoText'
import mktoVariables from '../variables'

function Button({ style, className, id }) {
  const classes = ['btn', 'btn-sm', 'btn-mkto'].join(' ')
  return (
    <a
      href={`\${${id}}`}
      target="_blank"
      className={className ? className + ' ' + classes : classes}
      style={style}
    >
      <MktoText name={mktoVariables[id + 'Text'].default} />
    </a>
  )
}

export default Button
