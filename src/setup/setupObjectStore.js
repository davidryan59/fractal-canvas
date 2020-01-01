import setupStats from '../graphics/setupStats'
import { fractalInitialise } from '../graphics/fractalUpdates'
import { verbosity } from '../constants/general'

const setupObjectStore = (objStore, reduxStore) => {
  const getState = reduxStore.getState
  setupStats(objStore, getState)
  fractalInitialise(objStore, getState)
  objStore.setup = true
  if (verbosity) console.log('Object store', objStore)
}

export default setupObjectStore
