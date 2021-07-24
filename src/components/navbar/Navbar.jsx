import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className='navcontainer'>
      <div className='logo'>
        <Link to='/'>Ganesh Timalsena</Link>
      </div>
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Me</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experiences'>Experiences</Link>
      </div>
    </div>
  );
}

export default Navbar;
