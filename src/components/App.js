import React from 'react';

import CanvasC from './CanvasC';
import PanelC from './PanelC';
// import StateViewerC from './StateViewerC';

import * as ui from '../constants/uiNames'


const App = props =>
  <div className="appDiv">
    <PanelC id={ui.PANEL_CANVAS} innerClassNames='flex greyBack justifyStart' />
    <div className='flex justifyStart'>
      <CanvasC />
    </div>
    <div className='flex justifyStart'>
      <PanelC id={ui.PANEL_ITERATION_0} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F1_C1} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F1_C2} innerClassNames='greyBack' />
    </div>
    <PanelC id={ui.PANEL_MAIN} innerClassNames='flex greyBack justifyStart' />
  </div>
  // <StateViewerC />


export default App
