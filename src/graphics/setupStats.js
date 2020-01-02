const setupStats = (objStore, getReduxState) => {
  // Area for app to log stats
  objStore.stats = {}
  objStore.stats.framesDrawn = 0
  // Area to cache stats between recalculations
  objStore.statCache = {}
}

export default setupStats
