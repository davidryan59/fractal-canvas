import React from 'react'

const Text = ({ text }) =>
  <div
    className='flex alignCentre valueColour'
    style={{ padding: '5px 10px', fontWeight: 'bold', fontSize: '110%' }}
  >
    {text.value}
  </div>

export default Text
