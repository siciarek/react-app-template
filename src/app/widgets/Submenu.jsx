import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

const Submenu = ({menu}) =>
  <nav className={menu.length > 0 ? 'navbar has-shadow' : 'is-hidden'}>
    <div className="container">
      <div className="navbar-brand">
        {
          menu.map(({route, label}, i) =>
            <Link key={i} activeClassName={'is-active'} className="navbar-item is-tab" to={route}>
              {label}
            </Link>
          )
        }
      </div>
    </div>
  </nav>

Submenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
}

Submenu.defaultProps = {
  menu: [],
}

export default Submenu