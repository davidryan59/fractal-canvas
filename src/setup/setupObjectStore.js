import setupCanvas from './items/setupCanvas'
import setupFractal from './items/setupFractal'


// TEMP
import drawFractal from '../graphics/drawFractal'
import iterateFractal from '../graphics/iterateFractal'


const setupObjectStore = (objStore, reduxStore) => {
  // Initialise Redux store before initialising object store
  setupCanvas(objStore, reduxStore)
  setupFractal(objStore, reduxStore)
  objStore.setup = true
  console.log('Object store', objStore)


  // TEMP
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  iterateFractal(objStore, reduxStore)
  drawFractal(objStore, reduxStore)


}

export default setupObjectStore
