import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ProfileImage from '../../assets/images/profile.png';
import DashboardImage from '../../assets/images/dashboardimg.png';
import TopNav from '../topnav';
import SideNav from '../sidenav';
import './dashboard.css';

const Dashboard = () => {
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
          <h1 className="contentheading">Dashboard</h1>
          <div className="welcome_user">
            <div className="welcome_profile">
              <img alt="profile.png" src={ProfileImage} className="welcomeimg" />
              <div className="username">
                <h2>Welcome {userName},</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="balance_div">
              <p>Balance</p>
              <span>$7000.20</span>
            </div>
          </div>
          <div className="last_earnings">
            <div className="welcome_profile">
              <ul className="withdrawl_history">
                <li>Last Earnings</li>
                <li>Last Withdrawl</li>
                <li>History</li>
              </ul>
            </div>
            <div className="balance_div">
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-toggle="dropdown">Past 7 Days
            <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li className="active"><a href="#">HTML</a></li>
                  <li><Link to="#">CSS</Link></li>
                  <li><Link to="#">JavaScript</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dashboard_table table-responsive border-0">
            <div className="table">
              <table className="table table-striped">
                <thead>
                  <tr className="table_heading">
                    <th className="maintablewidth tableusername">Name</th>
                    <th className="amounttablewidth">Transaction ID</th>
                    <th className="amounttablewidth">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img alt="dashboardimg.png" src={DashboardImage} />Recieved from Adam Sandler</td>
                    <td>N20495902020400550</td>
                    <td className="dolarnumber">$322.560</td>
                  </tr>
                  <tr>
                    <td><img alt="dashboardimg.png" src={DashboardImage} />Recieved from Adam Sandler</td>
                    <td>N20495902020400550</td>
                    <td className="dolarnumber">$322.560</td>
                  </tr>
                  <tr>
                    <td><img alt="dashboardimg.png" src={DashboardImage} />Recieved from Adam Sandler</td>
                    <td>N20495902020400550</td>
                    <td className="dolarnumber">$322.560</td>
                  </tr>
                  <tr>
                    <td><img alt="dashboardimg.png" src={DashboardImage} />Recieved from Adam Sandler</td>
                    <td>N20495902020400550</td>
                    <td className="dolarnumber">$322.560</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;;