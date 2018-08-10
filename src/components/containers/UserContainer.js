import React, { Component } from 'react';

import ArtListContainer from "../containers/ArtListContainer"

class UserContainer extends Component {
  render(){
    return(
      <div className="container div--user-container">
        UserContainer!!!
        <ArtListContainer />
      </div>
    )
  }
}

export default UserContainer;
