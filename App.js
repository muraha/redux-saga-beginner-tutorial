import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux'
import sagaMiddlewareFactory from 'redux-saga'
import TimeSelector from './components/TimeSelector'

const App = () => {
  return (
    <div>
      Time:
      <TimeSelector />
    </div>
  )
};

export default App;
