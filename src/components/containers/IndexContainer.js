import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtListContainer from "../containers/ArtListContainer"
import { artworkFetch } from "../../actions"

class IndexContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeQuery: "",
      submittedQuery: "",
    }
  }

  componentDidMount() {
    this.props.fetchData("http://localhost:4000/artwork");
    // this.props.fetchData("https://agile-anchorage-40481.herokuapp.com/artwork");
  }

  onQueryChange = (event) => {
    this.setState({ activeQuery: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let submittedQuery = this.state.activeQuery;
    this.setState({submittedQuery});
  }


  render(){
    // console.log("State at render", this.state);
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
  return {
    fetchData: (url) => dispatch(artworkFetch(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
