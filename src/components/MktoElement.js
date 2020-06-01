import React from 'react'
import FormPlaceholder from './FormPlaceholder'
import camelCase from 'lodash/camelCase'
import { PropTypes } from 'prop-types'

function MktoElement(props) {
  const { element, children, className, name, style } = props
  const id = camelCase(name)
  let text
  if (element === 'mktoText') {
    if (children) text = name + '. '
    else text = name
  }
  return (
    <div className={element} id={id} mktoname={name}>
      <div style={style} className={className}>
        {text}
        {element === 'mktoForm' && <FormPlaceholder />}
        {children}
      </div>
    </div>
  )
}

MktoElement.propTypes = {
  name: PropTypes.string.isRequired,
  element: PropTypes.oneOf(['mktoText', 'mktoImg', 'mktoForm']),
}

export default MktoElement
