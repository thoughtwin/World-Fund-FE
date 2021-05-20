import React from 'react';
import DashboardImg from '../../assets/images/dashboard.png';
import AffiliateImg from '../../assets/images/Affiliate.png';
import DepositImg from '../../assets/images/deposit.png';
import WithdrawImg from '../../assets/images/Withdraw.png';
import HistoryImg from '../../assets/images/history.png';
import SettingImg from '../../assets/images/settings.png';
import { Link } from 'react-router-dom'

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar_newcollapse">
        <div className="collapse navbar-collapse siderbar_container" id="sidebar-wrapper">
        {/* <div className=" siderbar_container" id="sidebar-wrapper"> */}
        <ul className="sidebar-nav">
          <li><img alt="dashboard.png" src={DashboardImg} /><Link to="/dashboard" style={{textDecoration: 'none'}}><span className="list_text" style={{color:"white"}}>Dashboard</span></Link></li>
          <li><img alt="Affiliate.png" src={AffiliateImg} /><Link to="/affiliate" style={{textDecoration: 'none'}}><span className="list_text" style={{color:"white"}}>Affiliate</span></Link></li>
          <li><img alt="deposit.png" src={DepositImg} /><Link to="/deposit" style={{textDecoration: 'none'}}><span className="list_text" style={{color:"white"}}>Deposit</span></Link></li>
          <li><img alt="Withdraw.png" src={WithdrawImg} /><Link to="/withdraw" style={{textDecoration: 'none'}} ><span className="list_text" style={{color:"white"}}>Withdraw</span></Link></li>
          <li><img alt="history.png" src={HistoryImg} /><Link to="/history" style={{textDecoration: 'none'}}><span className="list_text" style={{color:"white"}}>History</span></Link></li>
          <li><img alt="settings.png" src={SettingImg} /><Link to="/settings" style={{textDecoration: 'none'}}><span className="list_text" style={{color:"white"}}>Settings</span></Link></li>
        </ul>
      </div>
      </div>
    )
  }
}
export default SideNav;
