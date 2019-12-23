import { fractalInitialise } from '../graphics/fractalUpdates'

const setupObjectStore = (objStore, reduxStore) => {
  fractalInitialise(objStore, reduxStore)
  objStore.setup = true
  console.log('Object store', objStore)
}

export default setupObjectStore
