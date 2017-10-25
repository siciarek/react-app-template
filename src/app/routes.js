import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './App'
import {Home, Info, Contact, PageNotFound, Blank} from './pages'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="/blank" component={Blank}/>
    <Route path="/info" component={Info}/>
    <Route path="/contact" component={Contact}/>

    <Route path="*" component={PageNotFound}/>
  </Route>
)