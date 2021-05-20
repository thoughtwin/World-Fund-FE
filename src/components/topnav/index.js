import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import ProfileImage from '../../assets/images/profile.png';
import LogoImage from '../../assets/images/Logo.png';
import swal from 'sweetalert';
import './Topnav.css';
const TopNav = (props) => {
  // console.log("props", props);
  // const [userName, setUserName] = useState('');
  let history = useHistory();
  const logout = async () => {
    await swal({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'Are you sure you want to do logout?',
      buttons: ["cancel", true]
    }).then((result) => {
      if (result) {
        localStorage.removeItem('tokens');
        localStorage.clear()
        history.push("/login")
      } else {
        return false;
      }
    });
  }

  // useEffect(() => {
  //   const name = JSON.parse(localStorage.getItem('userName'));
  //   setUserName(name);
  // }, [userName]);

  return (
    <div className="header_dashboard">
      <nav className="navbar navbar-inverse dasboard_navbar">
        <div className="container-fluid dashboard_container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/dashboard"><img alt="Logo.png" src={LogoImage} className="header_logo" /></Link>
            <i className="fa fa-bars toggle-icon"></i>
            {/* <button class="navbar-toggler" aria-controls="sidebar-wrapper" type="button" data-toggle="collapse" data-target="#sidebar-wrapper" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button> */}
          </div>
          
          <ul className="nav navbar-nav navbar-right list-inline top_headerinline">
            <li className="list-inline-item"><Link to="#" className="notification"><i className="fa fa-bell bellicon"></i></Link></li>
            <li className="list-inline-item"><Link to="#" className="rebecca_text">{props?.userName}</Link></li>
            {/* <li><Link to="#" onClick={logout}><img alt="profile.png" src={ProfileImage} className="dashboardheader" /></Link></li> */}
            <li className="dropdown rebecca_profilelist list-inline-item"><Link data-toggle="dropdown" to="#"><img alt="profile.png" src={ProfileImage} className="dashboardheader" /></Link>
              <ul className="dropdown-menu">
                <li><Link to="#" onClick={logout}><i className="fa fa-power-off"></i>Log-out</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default TopNav;