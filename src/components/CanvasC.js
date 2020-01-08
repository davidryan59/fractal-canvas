import { connect } from 'react-redux'

import Canvas from './Canvas'

const mapStateToProps = (state, ownProps) => ({
  width: state.canvas.width,
  height: state.canvas.height
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
