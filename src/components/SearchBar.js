import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentQuery: "",
    }
  }

  render(){
    return(
      <div className="search-bar div--search-bar">
        <input className="input input--search-bar" placeholder="Search here for art"></input>
        <button className="button button--search-bar">Press me to see some art</button>
      </div>
    );
  }

}

export default SearchBar;
