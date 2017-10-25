import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import {Menu} from '../widgets'

const Header = ({title, subtitle}) => {
  return <section className="hero is-primary">
    <div className="section hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title">
              {title}
            </h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
          </div>
          <div className="column is-one-third has-text-right">

          </div>
        </div>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <nav className="tabs is-boxed">
          <Menu/>
        </nav>
      </div>
    </div>
  </section>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: config.app.name,
  subtitle: config.app.description,
}

export default (Header)