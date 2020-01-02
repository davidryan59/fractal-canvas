import React from 'react'

const Slider = ({ slider, displayVal, valueChange }) =>
  <div className='sliderDiv' style={{ width: '200px' }}>
    <div style={{ marginBottom: '1px', paddingBottom: '0px' }}>
      <label
        id={`label-${slider.id}`}
        htmlFor={`slider-${slider.id}`}
        className='labelColour'
      >
        {slider.label}
      </label>
      &nbsp;&nbsp;
      <span
        id={`display-${slider.id}`}
        className='valueColour'
      >
        {displayVal}
      </span>
      &nbsp;
      <span
        className='labelColour'
      >
        {slider.unit}
      </span>
    </div>
    <div style={{ marginTop: '1px', paddingTop: '0px' }}>
      <input
        id={`slider-${slider.id}`}
        type='range'
        min={slider.min}
        step={slider.step}
        max={slider.max}
        value={slider.value}
        onChange={valueChange}
        style={{ width: '180px' }}
      />
    </div>
  </div>

export default Slider
