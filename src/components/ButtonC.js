import { connect } from 'react-redux'

import Button from './Button'
import { getThunk } from '../actions'
import { BUTTON_PRESS } from '../actions/actionTypes'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getThunk(BUTTON_PRESS, { id: ownProps.button.id, isActive: ownProps.button.isActive }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
