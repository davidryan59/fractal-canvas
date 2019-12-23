// import setupItem from './setupItem'

const setupObjectStore = (objStore, reduxStore) => {
  // Initialise Redux store before initialising object store
  // setupItem(objStore, reduxStore)
  objStore.setup = true
  console.log('Object store', objStore)
}

export default setupObjectStore
