import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ action, children, className }) => (
  <button type="button" onClick={action} className={`button ${className}`}>
    {children}
  </button>
)

Button.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired
}

export default Button
