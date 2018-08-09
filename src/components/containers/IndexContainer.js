import React, { Component } from 'react';

import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"

class IndexContainer extends Component {
  render(){
    return(
      <div className="container div--index-container">
        IndexContainer!!!
        <SearchBar />
        <ArtListContainer />
      </div>
    )
  }
}

export default IndexContainer;
