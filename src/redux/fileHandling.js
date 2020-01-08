import FileSaver from 'file-saver'
import makeDateTimeText from '../general/makeDateTimeText'

export const saveReduxStateToLocalFile = reduxStore => {
  // Going to save state to a local file, in Downloads directory
  const filename = `fractal-canvas_${makeDateTimeText()}.json`
  const dataString = JSON.stringify(reduxStore.getState(), null, 2) // Pretty print JSON with indentation of 2 spaces
  console.log(`Saving ${dataString.length} bytes of state to ${filename}`)
  const blob = new Blob([dataString], { type: 'text/plain;charset=utf-8' })
  FileSaver.saveAs(blob, filename)
}
