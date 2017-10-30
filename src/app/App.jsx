import React from 'react';
import PropTypes from 'prop-types'
import {Header, Footer} from './widgets'
import {connect} from 'react-redux'
import {Section, Container} from 'bulma-react'
import './App.css'
import {Submenu} from './widgets'

const App = ({children, router}) => {

  return [
    <Header router={router}/>,

    <Section>
      <Container>
        {children}
      </Container>
    </Section>,

    <Footer/>]
}

App.propTypes = {
  children: PropTypes.any,
}

App.defaultProps = {
  children: [],
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(App);
