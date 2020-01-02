import React from 'react';

import CanvasC from './CanvasC';
import PanelC from './PanelC';
import StateViewerC from './StateViewerC';

import * as ui from '../constants/uiNames'


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
    </div>
    <PanelC id={ui.PANEL_MAIN} innerClassNames='flex greyBack justifyStart' />
    {(drawStateViewer) ? <StateViewerC /> : null}
  </div>


export default App
