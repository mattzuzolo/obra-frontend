import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// import { connect } from 'react-redux';

import AnnotationContainer from "./components/containers/AnnotationContainer"
import IndexContainer from "./components/containers/IndexContainer"
import NavBar from "./components/NavBar"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container div--app App">
        <Route path="/" component={NavBar} />
        <Switch>
          <Route path="/annotations" component={AnnotationContainer} />
          <Route path="/artwork" component={IndexContainer} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
