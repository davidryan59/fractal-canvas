import React from 'react'


const StateViewer = props =>
  <div className='StateViewer'>
    <p>
      <b>state.lastAction</b>:&nbsp;&nbsp;{props.actionJSON}
    </p>
    <p>
      <b>state</b>:&nbsp;&nbsp;{props.stateJSON}
    </p>
  </div>

export default StateViewer
