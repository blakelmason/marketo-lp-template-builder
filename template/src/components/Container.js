import React from 'react'

export default function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0px 16px 0px 16px',
      }}
    >
      {children}
    </div>
  )
}
