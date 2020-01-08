import React from 'react';

import CanvasC from './CanvasC';
import PanelC from './PanelC';
import StateViewerC from './StateViewerC';

import * as ui from '../general/uiNames'


const App = ({ drawStateViewer }) =>
  <div className="appDiv">
    <div className='appTopLine' style={{ padding: '2px 10px' }}>
      <b style={{ fontSize: '120%' }}>Fractal Canvas</b> -
      Create and customise a fractal, and display it in the web browser
      - Try changing the <b>minimum iteration size</b>, various angles, and orientation of each component.
      - Have fun!
      - <i>by David Ryan, 2020</i>
    </div>
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
    <div><p>Press 'S' to save Redux state to file. Loading from file not yet implemented. View the code in the <a href='https://github.com/davidryan59/fractal-canvas'>GitHub repo</a>.</p></div>
    {(drawStateViewer) ? <StateViewerC /> : null}
  </div>

export default App
