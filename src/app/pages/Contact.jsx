import React from 'react'
import PropTypes from 'prop-types'
import {Title} from 'bulma-react'

const Contact = ({title}) =>
  <div>
    <Title>{title}</Title>
    <pre className="panel-block">
      {`Ubi est castus historia?
Planetas persuadere, tanquam magnum solitudo.
Cur bromium unda?
Galataes volare!
Fidelis barcas nunquam imperiums elevatus est.
Accentors experimentum, tanquam teres navis!`}
    </pre>
  </div>

Contact.propTypes = {
  title: PropTypes.string.isRequired,
}

Contact.defaultProps = {
  title: 'Contact'
}

export default Contact