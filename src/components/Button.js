import React from 'react'

const Button = ({ button, valueChange }) =>
  <div className='flex alignCentre'>
    <button
      id={button.id}
      onClick={valueChange}
      style={{ width: `${button.widthPx}px` }}
    >
      {button.value ? button.labelActive : button.labelInactive}
    </button>
  </div>

export default Button
