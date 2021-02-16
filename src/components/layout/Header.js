import React from "react";
import {Link} from 'react-router-dom';



const Header = (props) => {
  return <>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/cart">Cart</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/products">Products</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/cart_hooks">Cart With Hooks</Link>
      </li>
      
    </ul>
  </div>
</nav>
  </>;
};

export default Header;
