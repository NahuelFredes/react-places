import React, { Component, useRef } from 'react';
import { Transition } from 'react-transition-group';

import './App.css';
import Home from './pages/Home';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Home></Home>
    )
  }
}

export default App;
