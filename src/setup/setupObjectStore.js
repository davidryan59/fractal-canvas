import setupStats from '../graphics/setupStats'
import { fractalInitialise } from '../graphics/fractalUpdates'

const setupObjectStore = (objStore, reduxStore) => {
  const getState = reduxStore.getState
  setupStats(objStore, getState)
  fractalInitialise(objStore, getState)
  objStore.setup = true
  console.log('Object store', objStore)
}

export default setupObjectStore
