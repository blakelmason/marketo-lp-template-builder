import React from 'react'

export default function MktoButton({ style, className, id }) {
  const classes = ['btn', 'btn-sm', 'btn-mkto'].join(' ')
  return (
    <a
      href={`\${${id}}`}
      target="_blank"
      className={className ? className + ' ' + classes : classes}
      style={{ ...style, width: 200 }}
    >
      {`\${${id + 'Text'}}`}
    </a>
  )
}
