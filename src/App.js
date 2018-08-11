import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// import { connect } from 'react-redux';

import AnnotationContainer from "./components/containers/AnnotationContainer"
import IndexContainer from "./components/containers/IndexContainer"
import DetailContainer from "./components/containers/DetailContainer"
import HomeContainer from "./components/containers/HomeContainer"
import NavBar from "./components/NavBar"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container div--app App">
        <Route path="/" component={NavBar} />
        <Switch>
          <Route path="/annotations" component={AnnotationContainer} />
          <Route path="/artwork/:id" component={DetailContainer} />
          <Route path="/artwork" component={IndexContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
