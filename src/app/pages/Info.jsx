import React from 'react'
import PropTypes from 'prop-types'

const Info = ({title}) =>
  <div>
    <h1 className="title">{title}</h1>
    <pre className="panel-block">
      {`Nunquam visum ionicis tormento.
Est albus ionicis tormento, cesaris.
Nunquam imitari clabulare.
Heu, barcas!
Demissios sunt ignigenas de brevis verpa.
Pol, a bene danista, elevatus!`}
    </pre>
  </div>

Info.propTypes = {
  title: PropTypes.string.isRequired,
}

Info.defaultProps = {
  title: 'Info'
}

export default Info