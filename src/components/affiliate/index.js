import React from 'react';
import SideNav from '../sidenav';
import TopNav from '../topnav';

class Affiliate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <TopNav />
        <div className="dashboard_content">
          <SideNav />
          <div className="dashboardmain_content">
              <h1 style={{ color: 'white' }}>Affiliate page</h1>
          </div>
        </div>
      </>
    )
  }
}
export default Affiliate;