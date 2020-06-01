import React from 'react'
import classnames from 'classnames'
import variables from '../variables'
import get from 'lodash/get'

function MktoButton({ style, className, id }) {
  return (
    <a
      href={`\${${id}}`}
      target="_blank"
      className={classnames('btn btn-sm btn-mkto', className)}
      style={{ ...style, width: 200 }}
    >
      {`\${${id + 'Text'}}`}
    </a>
  )
}

MktoButton.propTypes = {
  id: function (props, propName, componentName) {
    if (!get(variables, props[propName])) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed. Prop must exist as key in marketo variables in variables.js.'
      )
    }
  },
}

export default MktoButton
