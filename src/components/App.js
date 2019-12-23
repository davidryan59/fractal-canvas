import React from 'react';

import CanvasC from './CanvasC';
import PanelC from './PanelC';
// import StateViewerC from './StateViewerC';

import * as ui from '../constants/uiNames'


const App = props =>
  <div className="App">
    <CanvasC />
    <PanelC id={ui.MAIN_PANEL} />
  </div>

// <StateViewerC />

export default App
