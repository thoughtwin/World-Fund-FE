import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
const HomeNav = () => {
  const history = useHistory();
  return (
    <>
      {/* <nav className="navbar navbar-inverse">
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
            <li><button className="get_startedbtn" onClick={() => history.push('/signup')}>Get started</button></li>
          </ul>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-md navbar-inverse fixed_header">
      <Link className="navbar-brand" to="/home"><img src={Logo} /></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarHeader">
          <ul class="navbar-nav homemenulist">
            <li className="active"><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/rules">Rules</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>  
          </ul>
          <ul className="nav navbar-nav navbar-right right_sidenav">
            <li className="logintext"><Link to="/login"> <i className="fa fa-lock"></i>Log in</Link></li>
            <li><button className="get_startedbtn">Get started</button></li>
          </ul>
        </div>  
      </nav>
    </>
  )
}
export default HomeNav;