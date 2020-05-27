import React from 'react'

export default function Container({ children }) {
  return (
    <div className="container-fluid mx-auto" style={{ maxWidth: 1200 }}>
      {children}
    </div>
  )
}
