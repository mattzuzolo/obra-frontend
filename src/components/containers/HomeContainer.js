import React, { Component } from 'react';

import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"

class HomeContainer extends Component {
  render(){
    return(
      <div className="container div--home-container">
        HomeContainer!!!
        <SearchBar />
        <ArtListContainer />
      </div>
    )
  }
}

export default HomeContainer;
