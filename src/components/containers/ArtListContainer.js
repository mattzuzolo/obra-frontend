import React, { Component } from 'react';

import ArtCard from "../ArtCard"

class ArtListContainer extends Component {


  render(){
    return(
      <div className="container div--art-list-container">
        <ArtCard key={1} id={1} title={"My title"} artist={"The artist"} imageUrl={"Image url"}/>

        <form onSubmit={this.onSearchSubmit}>
          <input type="text"
            value={this.state.currentQuery}
            onChange={this.handleChange}
            className="input input--search-bar"
            placeholder="Search here for art"
            ></input>
          <button className="button button--search-bar">Press me to see some art</button>
        </form>
      </div>
    )
  }


}

export default ArtListContainer;
