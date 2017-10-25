import React from 'react'
import PropTypes from 'prop-types'

class Smart extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

Smart.propTypes = {
  init: PropTypes.func.isRequired,
}

Smart.defaultProps = {
  init: () => {}
}

export default (Smart)