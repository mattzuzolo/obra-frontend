import React, { Component } from 'react';
// import uuid from "uuid";
import { connect } from 'react-redux';
// import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"
// import ArtCard from "../ArtCard"
import { artworkFetch } from "../../actions"

class IndexContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeQuery: "",
      submittedQuery: "",
    }
  }

  onQueryChange = (event) => {
    this.setState({ activeQuery: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let submittedQuery = this.state.activeQuery;
    this.setState({submittedQuery});
  }

  componentDidMount() {
    this.props.fetchData("http://localhost:4000/artwork");
  }

  render(){
    console.log("State at render", this.state);
    return(
      <div className="container div--index-container">
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder="search for art here" value={this.state.activeQuery} onChange={this.onQueryChange} ></input>
          <button>Click me for art</button>
        </form>

        <ArtListContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log("Inside mapStateToProps", state);
  return {
    artworkArray: state.artworkArray,
  }
}

function mapDispatchToProps(dispatch){
  // dispatch();
  return {
    fetchData: (url) => dispatch(artworkFetch(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
