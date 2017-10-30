import React from 'react';
import PropTypes from 'prop-types'
import {Header, Footer} from './widgets'
import {connect} from 'react-redux'
import {Section, Container} from 'bulma-react'
import './App.css'

const App = ({children, router}) => {

  return <div>
    <Header router={router}/>,

    <Section>
      <Container>
        {children}
      </Container>
    </Section>,

    <Footer/>
  </div>
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
