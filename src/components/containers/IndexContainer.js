import React, { Component } from 'react';
// import uuid from "uuid";
import { connect } from 'react-redux';
// import SearchBar from "../SearchBar"
import ArtListContainer from "../containers/ArtListContainer"
// import ArtCard from "../ArtCard"
import { updateArtworkAction } from "../../actions"

class IndexContainer extends Component {

  componentDidMount(){
    fetch("https://agile-anchorage-40481.herokuapp.com/artwork")
      .then(({data}) => {
        dispatch({type: UPDATE_ARTWORK_ACTION, payload: data })
      })
  }

  render(){
    console.log("artWork array on render" , this.props);
    return(
      <div className="container div--index-container">
        INDEX HERE
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
    updateArtwork: (artworkArray) => dispatch(updateArtworkAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
