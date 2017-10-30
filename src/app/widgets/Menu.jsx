import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({router, routes}) => {

  const currentRoute = router.getCurrentLocation().pathname

  const tabs = Object.keys(routes).map((route, i) =>
    <li key={i} className={route === currentRoute ? 'is-active' : null}>
      <a onClick={() => router.push(route)}>
        {routes[route]}
      </a>
    </li>
  )

  return <ul>{tabs}</ul>
}

Menu.propTypes = {
  router: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
}

Menu.defaultProps = {
  router: {
    push: e => {},
    getCurrentLocation: () => ({pathname: '/'})
  },
  routes: {
    '/': 'Home',
    '/info': 'Info',
    '/contact': 'Contact'
  }
}

export default Menu
