import React from 'react'
import FormPlaceholder from './FormPlaceholder'
import { PropTypes } from 'prop-types'
import classnames from 'classnames'

function MktoElement({ el, children }) {
  return (
    <div className={classnames(el, 'mktoElement')}>
      {
        {
          mktoText: 'Text Element' + (children ? '. ' + children : ''),
          mktoForm: <FormPlaceholder />,
          mktoImg: children,
        }[el]
      }
    </div>
  )
}

MktoElement.propTypes = {
  el: PropTypes.oneOf(['mktoText', 'mktoImg', 'mktoForm']),
}

export default MktoElement
