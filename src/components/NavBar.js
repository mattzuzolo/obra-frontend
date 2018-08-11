import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div className="navbar">
        <Link to="/home">Home     </Link>
        <Link to="/artwork">Artwork     </Link>
        <Link to="/annotations">Annotations     </Link>
        <Link to="/artwork/:id">Detail      </Link>
      </div>

    )
  }
}

export default NavBar;
