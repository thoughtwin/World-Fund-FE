import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
const HomeNav = () => {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/home"><img src={Logo} /></Link>
          </div>
          <ul className="homemenulist">
            <li className="active"><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/rules">Rules</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="logintext"><Link to="/login"> <i className="fa fa-lock"></i>Log in</Link></li>
            <li><button className="get_startedbtn">Get started</button></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default HomeNav;