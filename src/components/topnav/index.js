import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import ProfileImage from '../../assets/images/profile.png';
import LogoImage from '../../assets/images/Logo.png';
import swal from 'sweetalert';

const TopNav = () => {
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
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid dashboard_container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/dashboard"><img alt="Logo.png" src={LogoImage} className="header_logo" /></Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="#" className="notification"><i className="fa fa-bell bellicon"></i></Link></li>
            <li><Link to="#" className="rebecca_text">Rebecca Young</Link></li>
            {/* <li><Link to="#" onClick={logout}><img alt="profile.png" src={ProfileImage} className="dashboardheader" /></Link></li> */}
            <li className="dropdown"><Link data-toggle="dropdown" to="#"><img alt="profile.png" src={ProfileImage} className="dashboardheader" /></Link>
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