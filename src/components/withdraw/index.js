import React from 'react';
import SideNav from '../sidenav';
import TopNav from '../topnav';
import emailArrow from '../../../src/assets/images/emailarrow.png';
import './withdraw.css';
class Withdraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopNav />
        <div className="dashboard_content withdraw_page" id="wrapper">
          <SideNav />
          <div className="dashboardmain_content page-content-wrapper">
            <div className="deposit_container">
              <h1 className="contentheading">Withdraw</h1>
              <div className="withdraw_btn btn_margin">
                <button className="add_money withdrawl_btn">Withdraw</button>
                <button className="add_money send_request">Send Request</button>
              </div>
            </div>
            <div className="dashboard_table deposit_table table-responsive border-0">
              <div className="table">
                <table className="table table-striped">
                  <tr className="table_heading">
                    <th className="maintablewidth tableusername deposit_email">Email<img src={emailArrow} className="email_arrow" /></th>
                    <th className="amounttablewidth deposit_width">Date</th>
                    <th className="amounttablewidth deposit_width">Transaction ID</th>
                    <th className="amounttablewidth deposit_width">Token No.</th>
                    <th className="amounttablewidth deposit_width">Amount</th>
                  </tr>
                  {/* <tr className="tableoddcontent">
                    <td><span>A</span>barbar.devine@gmail.com</td>
                    <td>12/09/2020</td>
                    <td>N20495902020400550</td>
                    <td>ERSTAER959020204</td>
                    <td className="dolarnumber">$425.210</td>
                  </tr>
                  <tr className="tableevencontent">
                    <td><span>A</span>barbar.devine@gmail.com</td>
                    <td>12/09/2020</td>
                    <td>N20495902020400550</td>
                    <td>ERSTAER959020204</td>
                    <td className="dolarnumber">$425.210</td>
                  </tr>
                  <tr className="tableoddcontent">
                    <td><span>A</span>barbar.devine@gmail.com</td>
                    <td>12/09/2020</td>
                    <td>N20495902020400550</td>
                    <td>ERSTAER959020204</td>
                    <td className="dolarnumber">$425.210</td>
                  </tr>
                  <tr className="tableevencontent">
                    <td><span>A</span>barbar.devine@gmail.com</td>
                    <td>12/09/2020</td>
                    <td>N20495902020400550</td>
                    <td>ERSTAER959020204</td>
                    <td className="dolarnumber">$425.210</td>
                  </tr> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Withdraw;