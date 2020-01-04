import { connect } from 'react-redux'

import Button from './Button'
import { getThunk } from '../reducers/actions'
import { BUTTON_PRESS } from '../reducers/uiItem'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getThunk(BUTTON_PRESS, { id: ownProps.button.id, value: !ownProps.button.value }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
