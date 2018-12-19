import React from 'react'

export default ({ children, flipped, type }) => (
  <div className="card">
    <span className={flipped ? 'answer' : 'question'}>{children}</span>
  </div>
)
