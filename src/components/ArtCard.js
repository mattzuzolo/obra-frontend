import React, { Component } from 'react';

class ArtCard extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="div--art-card">
        <h1>{this.props.title}</h1>
        <h1>{this.props.artist}</h1>
      </div>
    );
  }


}

export default ArtCard;
