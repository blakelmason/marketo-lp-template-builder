import React from 'react'
import MktoButton from './MktoButton'
import { PropTypes } from 'prop-types'

function MktoShowHide({ section, children }) {
  return <div className={`show-hide-${section}`}>{children}</div>
}

MktoButton.propTypes = {
  section: PropTypes.number.isRequired,
}

export default MktoShowHide
