import React from 'react'

export default function MktoShowHide({ section, children }) {
  return <div className={`show-hide-${section}`}>{children}</div>
}
