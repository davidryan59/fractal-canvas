import React from 'react'

const Picklist = ({ picklist, valueChange }) =>
  <div className='flex alignCentre' style={{ width: '250px' }}>
    <div style={{ width: '60px' }}>
      <label className='labelColour'>
        {picklist.label}
      </label>
    </div>
    <div style={{ width: '170px' }}>
      <select
        value={picklist.value}
        onChange={valueChange}
        className='picklistSelect'
        style={{ width: '165px', height: '23px' }}
      >
        {picklist.values.map(pv => <option key={pv}>{pv}</option>)}
      </select>
    </div>
  </div>

export default Picklist
