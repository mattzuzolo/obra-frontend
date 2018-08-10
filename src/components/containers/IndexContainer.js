import React, { Component } from 'react';

import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"
import ArtCard from "../ArtCard"

class IndexContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      artworkArray: [],
      currentQuery: "",
    }
  }

  //This will send a default to populate the page so there is always artwork present.
  componentDidMount(){
    fetch("https://agile-anchorage-40481.herokuapp.com/artwork")
      .then(response => response.json())
      .then(data => this.setState({artworkArray: data}));
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    //Do something here to display specific artwork based on form submit
  }

  //Update input state for controlled form
  handleChange = (event) => {
    this.setState({currentQuery: event.target.value})
  }


  render(){
    return(
      <div className="container div--index-container">
        <ArtListContainer />
      </div>
    )
  }
}

export default IndexContainer;

    // <SearchBar onSearchSubmit={this.onSearchSubmit}/>
