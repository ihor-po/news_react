import React, { Component } from 'react';
import loaderImg from './img/tenor.gif';

class LoaderComponent extends Component {

  render() {
    return (
        <img src={loaderImg} alt=""></img>
    );
  }
}

export default LoaderComponent;