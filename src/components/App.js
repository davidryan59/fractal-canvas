import React from 'react';

import CanvasC from './CanvasC';
import PanelC from './PanelC';
import StateViewerC from './StateViewerC';

import * as ui from '../general/uiNames'


const App = ({ drawStateViewer }) =>
  <div className="appDiv">
    <PanelC id={ui.PANEL_CANVAS} innerClassNames='flex greyBack justifyStart' />
    <div className='flex justifyStart'>
      <CanvasC />
    </div>
    <div className='flex justifyStart'>
      <PanelC id={ui.PANEL_START} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F1_C1} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F1_C2} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F2_C1} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_F2_C2} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_ITERATION} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_HULL} innerClassNames='greyBack' />
      <PanelC id={ui.PANEL_GENERAL} innerClassNames='greyBack' />
    </div>
    <div><p>Press 'S' to save Redux state to file. Loading from file not yet implemented.</p></div>
    {(drawStateViewer) ? <StateViewerC /> : null}
  </div>

export default App
