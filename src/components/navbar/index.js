import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/dashboard">World Funds</Link>

        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rules">Rules</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;