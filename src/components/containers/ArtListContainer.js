import React, { Component } from 'react';

import ArtCard from "../ArtCard"

class ArtListContainer extends Component {


  render(){
    return(
      <div className="container div--art-list-container">
        Art List Container here
        <ArtCard />
      </div>
    )
  }


}

export default ArtListContainer;
