import { connect } from 'react-redux'

import { buttonActive } from '../getters/button'
import * as ui from '../constants/uiNames'

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
