import React from 'react'
import PropTypes from 'prop-types'
import {Title} from 'bulma-react'

const Info = ({title}) =>
  <div>
    <Title>{title}</Title>
    <pre className="panel-block">
      {`Est raptus cobaltum, cesaris.
Raptus historias ducunt ad exemplar.
Nunquam vitare ignigena.
Abnobas ortum!
Bassus luna satis acquireres palus est.
Domesticus ventuss ducunt ad absolutio!`}
    </pre>
  </div>

Info.propTypes = {
  title: PropTypes.string.isRequired,
}

Info.defaultProps = {
  title: 'Info'
}

export default Info