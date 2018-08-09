import React, { Component } from 'react';

import ContentContainer from "./components/containers/ContentContainer"


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container div--app App">
        <ContentContainer />
      </div>
    );
  }
}

export default App;
