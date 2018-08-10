import React, { Component } from 'react';
// import uuid from "uuid";
import { connect } from 'react-redux';
// import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"
// import ArtCard from "../ArtCard"
import { updateArtworkAction, artworkFetch } from "../../actions"

class IndexContainer extends Component {

  componentDidMount() {
        this.props.fetchData("http://localhost:4000/artwork");
  }

  render(){
    console.log("artWork array on render" , this.props);
    return(
      <div className="container div--index-container">
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
