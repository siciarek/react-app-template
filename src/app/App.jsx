import React from 'react';
import {Header, Footer} from './widgets'
import {connect} from 'react-redux'
import './App.css'

const App = ({children, router}) => {

  return <div>
    <Header/>

    <section className="section">
      <div className="container">
        {children}
      </div>
    </section>

    <Footer/>
  </div>
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(App);
