import { connect } from 'react-redux'

import Picklist from '../components/Picklist'
import { getThunk } from '../redux/actions'
import { SET_PICKLIST } from '../redux/reducers/uiItem'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  valueChange: e => dispatch(getThunk(SET_PICKLIST, { id: ownProps.picklist.id, value: e.target.value }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picklist)
