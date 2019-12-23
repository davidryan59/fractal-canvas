import React from 'react';
import CanvasC from './CanvasC';
import StateViewerC from './StateViewerC';


const App = props =>
  <div className="App">
    <p>Para before canvas</p>
    <CanvasC />
    <p>Para after canvas</p>
    <div>Inner div</div>
    <StateViewerC />
  </div>

export default App
