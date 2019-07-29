import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux'
import sagaMiddlewareFactory from 'redux-saga';

class TimeSelector extends Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    const countriesData = {};
    fetch('http://worldtimeapi.org/api/timezone')
      .then(res => res.json())
      .then(data => data.map(el => {
        let [continent, country, region] = el.split('/');
        countriesData[continent] = countriesData[continent] || [];
        if (!country) { return };
        countriesData[continent].push(`${country}${region ? `/${region}` : ''}`)
        this.setState({ countriesData })
      }))
  };


  render() {
    return (
      <div>
        Selet the Region:
      <select name="country">
          {Object.keys(this.state)
            .map(el => {
              return <option key={el} value={el}>{el}</option>
            })
          }
        </select>
      </div>
    )
  };
};

export default TimeSelector;
