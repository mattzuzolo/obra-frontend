import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentQuery: "",
    }
  }

  handleChange = (event) => {
    this.setState({currentQuery: event.target.value})
  }

  render(){
    // console.log("Current state in SearchBar", this.state.currentQuery)
    return(
      <div className="search-bar div--search-bar">
        <form onSubmit={this.props.onSearchSubmit}>
          <input type="text"
            value={this.state.currentQuery}
            onChange={this.handleChange}
            className="input input--search-bar"
            placeholder="Search here for art"
            ></input>
          <button className="button button--search-bar">Press me to see some art</button>
        </form>
      </div>
    );
  }

}

export default SearchBar;
