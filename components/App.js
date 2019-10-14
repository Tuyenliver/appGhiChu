import React, { Component } from 'react';
import Main from './Main'

export default class HelloWorldApp extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Main/>
    );
  }
}