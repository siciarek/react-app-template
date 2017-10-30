import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import {Menu, Submenu} from '../widgets'

const Header = ({title, subtitle, router}) => {
  return <div>
  <section className="hero is-primary">
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
          <Menu router={router}/>
        </nav>
      </div>
    </div>
  </section>
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item is-tab is-active" href="https://bulma.io/documentation/overview/start/">
            Start
          </a>
          <a className="navbar-item is-tab " href="https://bulma.io/documentation/overview/customize/">
            Customize
          </a>
          <a className="navbar-item is-tab " href="https://bulma.io/documentation/overview/classes/">
            Classes
          </a>
        </div>
      </div>
    </nav>
    </div>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: config.app.name,
  subtitle: config.app.description,
}

export default Header