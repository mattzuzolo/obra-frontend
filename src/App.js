import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ContentContainer from "./components/containers/ContentContainer"
import AnnotationContainer from "./components/containers/AnnotationContainer"
import IndexContainer from "./components/containers/IndexContainer"
import HomeContainer from "./components/containers/HomeContainer"
import UserContainer from "./components/containers/UserContainer"
import NavBar from "./components/NavBar"


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container div--app App">
        <Route path="/" component={NavBar} />
        <Switch>
          <Route path="/annotations" component={AnnotationContainer} />
          <Route path="/Artwork" component={IndexContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);


// <ContentContainer />
