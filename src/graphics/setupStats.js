const setupStats = (objStore, getReduxState) => {
  objStore.stats = {}
  objStore.stats.framesDrawn = 0
  objStore.stats.sizeCurrent = 0
  objStore.stats.sizeAll = 0
  objStore.stats.timeIterationStart = 0
  objStore.stats.timeIterationEnd = 0
  objStore.stats.timeDrawCanvasStart = 0
  objStore.stats.timeDrawCanvasEnd = 0
}

export default setupStats
