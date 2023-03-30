import React from 'react'
import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <NavLink className="ml-3"  to="/post">Posts <span class="sr-only">(current)</span></NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="ml-3" to="/createpost">Create Post</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="ml-3" to="/lazylaoding">Lazy loading</NavLink>
        </li>
      </ul>
    
    </div>
  </nav>
  )
}

export default Navbar