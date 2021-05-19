import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../topnav';
import SideNav from '../sidenav';
import UpdateProfile from '../updateprofile';
import UpdateWlt from '../updateWallet';
import ChangePwd from '../changepassword';
import './settings.css';
const Settings = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('userName'));
    // console.log("name", name);
    setUserName(name);
  }, [userName]);
  return (
    <>
      <TopNav userName={userName} />
      <div className="dashboard_content" id="wrapper">
        <SideNav />
        <div className="dashboardmain_content page-content-wrapper">
          <div className="deposit_container">
            <h1 className="contentheading">Settings</h1>
            <p className="changepasstext">Change your account settings</p>
          </div>

          <ul className="nav nav-tabs tabbing_list setting_pagelist">
            <li className="active first_child"><Link data-toggle="tab" to="#home">General Settings</Link></li>
            <li><Link data-toggle="tab" to="#menu1">Finance Settings</Link></li>
            <li className="last_child"><Link data-toggle="tab" to="#menu2">Change password</Link></li>
          </ul>
          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <UpdateProfile />
            </div>
            <div id="menu1" className="tab-pane fade">
              <UpdateWlt />
            </div>
            <div id="menu2" className="tab-pane fade">
              <ChangePwd />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Settings;