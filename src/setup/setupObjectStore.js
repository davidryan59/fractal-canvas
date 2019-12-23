import setupCanvas from './items/setupCanvas'

const setupObjectStore = (objStore, reduxStore) => {
  // Initialise Redux store before initialising object store
  setupCanvas(objStore, reduxStore)
  objStore.setup = true
  console.log('Object store', objStore)
}

export default setupObjectStore
