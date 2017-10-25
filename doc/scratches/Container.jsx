import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Dumb} from './components'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dumb)
