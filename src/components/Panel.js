import React from 'react'

import ButtonC from './ButtonC'
import PicklistC from './PicklistC'
import SliderC from './SliderC'
import TextC from './TextC'

import * as ui from '../general/uiNames'

const Panel = ({ innerClassNames, items }) =>
  <div className={innerClassNames}>
    {items.map(item =>
      (item.type === ui.TYPE_TOGGLE)
        ? <ButtonC key={item.id} button={item} />
        : (item.type === ui.TYPE_PICKLIST)
          ? <PicklistC key={item.id} picklist={item} />
          : (item.type === ui.TYPE_SLIDER)
            ? <SliderC key={item.id} slider={item} />
            : (item.type === ui.TYPE_TEXT)
              ? <TextC key={item.id} text={item} />
              : <TextC key={item.id} text={{ value: 'Error: panel type not recognised' }} />
    )}
  </div>

export default Panel
