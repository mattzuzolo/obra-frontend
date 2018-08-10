import React, { Component } from 'react';

import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"
import ArtCard from "../ArtCard"

class IndexContainer extends Component {



  render(){
    return(
      <div className="container div--index-container">
        INDEX HERE
        <ArtListContainer />
      </div>
    )
  }
}

export default IndexContainer;
