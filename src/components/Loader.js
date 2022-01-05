import Circles from 'react-loader-spinner';
import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Loader extends Component {
  state = {};
  render() {
    return (
      <Circles
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
        visible={true}
      />
    );
  }
}
