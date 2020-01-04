import { connect } from 'react-redux'

import { buttonActive } from '../redux/getters/button'
import * as ui from '../general/uiNames'

import App from './App'


const mapStateToProps = (state, ownProps) => ({
  drawStateViewer: buttonActive(state, ui.TOGGLE_DISPLAY_STATEVIEW),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
