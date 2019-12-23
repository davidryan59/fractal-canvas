import React from 'react';

import CanvasC from './CanvasC';
import PanelC from './PanelC';
// import StateViewerC from './StateViewerC';

import * as ui from '../constants/uiNames'


const App = props =>
  <div className="appDiv">
    <div className='flex justifyStart'>
      <CanvasC />
    </div>
    <div className='flex justifyStart'>
      <PanelC id={ui.PANEL_MAIN} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_ITERATION_0} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F1_C1} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F1_C2} innerClassNames='greyBack' />
    </div>
  </div>

// <StateViewerC />

export default App
