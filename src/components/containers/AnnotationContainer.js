import React, { Component } from 'react';

import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"

class AnnotationContainer extends Component {
  render(){
    return(
      <div className="container div--annotation-container">
        AnnotationContainer!!!
        <SearchBar />
        <ArtListContainer />
      </div>
    )
  }
}

export default AnnotationContainer;
