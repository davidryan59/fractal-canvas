import setupFractal from './items/setupFractal'
import setupCanvas from './items/setupCanvas'

const setupObjectStore = (objStore, reduxStore) => {
  // Initialise Redux store before initialising object store
  setupFractal(objStore, reduxStore)
  setupCanvas(objStore, reduxStore)
  objStore.setup = true
  console.log('Object store', objStore)
}

export default setupObjectStore
