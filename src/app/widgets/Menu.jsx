import React from 'react'
import {withRouter} from 'react-router'

const Menu = ({router}) => {

  const routes = {
    '/': 'Home',
    '/info': 'Info',
    '/contact': 'Contact'
  }

  const tabs = Object.keys(routes).map(route =>
    <li key={0} className={route === router.getCurrentLocation().pathname ? 'is-active' : null}>
      <a onClick={() => router.push(route)}>
        {routes[route]}
      </a>
    </li>
  )

  return <ul>{tabs}</ul>
}

export default withRouter(Menu)
