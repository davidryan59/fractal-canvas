import { connect } from 'react-redux'

import Button from './Button'
import { getThunk } from '../redux/actions'
import { BUTTON_PRESS } from '../redux/reducers/uiItem'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getThunk(BUTTON_PRESS, { id: ownProps.button.id, value: !ownProps.button.value }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
