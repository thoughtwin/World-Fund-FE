import React from 'react';
import SideNav from '../sidenav';
import TopNav from '../topnav';
import './affiliate.css';
class Affiliate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <TopNav />
        <div className="dashboard_content affiliate_page" id="wrapper">
          <SideNav />
          <div className="dashboardmain_content  page-content-wrapper">
              <h1 style={{ color: 'white' }}>Affiliate page</h1>
          </div>
        </div>
      </>
    )
  }
}
export default Affiliate;