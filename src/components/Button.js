import React from 'react'

const Button = ({ button, valueChange }) => (
  <div className='flex alignCentre'>
    <button
      id={button.id}
      onClick={valueChange}
      style={{ padding: '5px', width: `${button.widthPx}px` }}
    >
      {button.isActive ? button.labelActive : button.labelInactive}
    </button>
  </div>
)

export default Button
