import React, { Component } from 'react';

import IndexContainer from "./IndexContainer"
import NavBar from "../NavBar"

class ContentContainer extends Component {
  render(){
    return(
      <div className="container div--content-container">
        ContentContainer
        <NavBar />
        <IndexContainer />
      </div>
    );
  }
}

export default ContentContainer;
