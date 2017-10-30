import React from 'react'
import PropTypes from 'prop-types'
import {Title} from 'bulma-react'

const Home = ({title}) =>
  <div>
    <Title>{title}</Title>
    <pre className="panel-block">
      {`Nunquam visum ionicis tormento.
Est albus ionicis tormento, cesaris.
Nunquam imitari clabulare.
Heu, barcas!
Demissios sunt ignigenas de brevis verpa.
Pol, a bene danista, elevatus!`}
    </pre>
  </div>

Home.propTypes = {
  title: PropTypes.string.isRequired,
}

Home.defaultProps = {
  title: 'Home'
}

export default Home