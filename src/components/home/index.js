import React from 'react';
import Web_bg from '../../assets/images/Web_bg.png';
import BasicPlan from '../../assets/images/Basic_Plan.png';
import CheckMark from '../../assets/images/Checkmark.png';
import PremiumPlan from '../../assets/images/Premium_Plan.png';
import Advanceplan from '../../assets/images/Advance plan.png';
import ImageGirl from '../../assets/images/Image_girl.png';
import LastDeposit from '../../assets/images/Last_deposit.png';
import TableIcon1 from '../../assets/images/tableIcon1.png';
import BannerBg from '../../assets/images/Banner_bg.png';
import Icon_1 from '../../assets/images/Icon_1.png';
import Icons_2 from '../../assets/images/Icons_2.png';
import Icon_3 from '../../assets/images/Icon_3.png';
import Background from '../../assets/images/Background.png';
import Icon_4 from '../../assets/images/Icon_4.png';
import Logo from '../../assets/images/Logo.png';
import Graph from '../../assets/images/Graph.png';
import Dash from '../../assets/images/dash.png';
import Ethereum from '../../assets/images/Ethereum.png';
import Litecoin3 from '../../assets/images/litecoin3.png';
import Ripple from '../../assets/images/Ripple.png';
import LastWithdraw from '../../assets/images/Last_Withdraw.png';
import Arrow from '../../assets/images/Arrow.png';
import Rocket from '../../assets/images/Rocket.png';
import Base from '../../assets/images/Base.png';
import ChatSmall from '../../assets/images/chat_small.png';
import Footer_wave from '../../assets/images/Footer_wave.png';
import ChatBig from '../../assets/images/Chat_big.png';
import HomeNav from '../homenav';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home_maincontainer">
        <div className="header_banner" style={{backgroundImage:`url(${BannerBg})`}}>
          <div className="container">
            <HomeNav/>
            <div className="banner_Container">
              <h1>The most secure <br />source of investment</h1>
              <p>We are a financial invstment company where you <br />can be the part of its investment community worldwide.
          </p>
              <ul>
                <li><button className="invest_nowbtn">Invest Now</button></li>
                <li><button className="learn_morebtn">Learn More</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="securely_container" style={{backgroundImage:`url(${Web_bg})`}}>
          <h2 className="section_heading">Invest securely with our plans</h2>
          <p className="section_content pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed volutpat vulputate ut
        fermentum tristique fermentum posuere.</p>
          <div className="container row container_row">
            <div className="col-md-4">
              <div className="basic_container">
                <button className="basic_button">BASIC</button>
                <p className="basic_imgdiv"><img src={BasicPlan} className="basicplan_img" /></p>
                <p className="daily_text"> % <span>3.4</span> /DAILY </p>
                <ul>
                  <li><img src={CheckMark} /><span>Duration</span> Lifetime</li>
                  <li><img src={CheckMark} /><span>$30</span> Min Invest</li>
                  <li><img src={CheckMark} /><span>$50000</span> Max Invest</li>
                  <li><img src={CheckMark} /><span>102%</span> Monthly Return</li>
                  <li><img src={CheckMark} /><span>Principle</span> Included</li>
                  <li><img src={CheckMark} /><span>Manual</span> Withdraw</li>
                </ul>
                <button className="signup_btn">Sign Up</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="basic_container">
                <button className="basic_button">AdvanceD</button>
                <p className="basic_imgdiv"><img src={Advanceplan} className="advanceplan_img" /></p>
                <p className="daily_text"> % <span>4.4</span> /DAILY </p>
                <ul>
                  <li><img src={CheckMark} /><span>Duration</span> Lifetime</li>
                  <li><img src={CheckMark} /><span>$30</span> Min Invest</li>
                  <li><img src={CheckMark} /><span>$50000</span> Max Invest</li>
                  <li><img src={CheckMark} /><span>102%</span> Monthly Return</li>
                  <li><img src={CheckMark} /><span>Principle</span> Included</li>
                  <li><img src={CheckMark} /><span>Manual</span> Withdraw</li>
                </ul>
                <button className="signup_btn">Sign Up</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="basic_container">
                <button className="basic_button">PREMIUM</button>
                <p className="basic_imgdiv"><img src={PremiumPlan} className="premiumplan_img" /></p>
                <p className="daily_text"> % <span>5.4</span> /DAILY </p>
                <ul>
                  <li><img src={CheckMark} /><span>Duration</span> Lifetime</li>
                  <li><img src={CheckMark} /><span>$30</span> Min Invest</li>
                  <li><img src={CheckMark} /><span>$50000</span> Max Invest</li>
                  <li><img src={CheckMark} /><span>102%</span> Monthly Return</li>
                  <li><img src={CheckMark} /><span>Principle</span> Included</li>
                  <li><img src={CheckMark} /><span>Manual</span> Withdraw</li>
                </ul>
                <button className="signup_btn">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="total_acoounts" style={{backgroundImage:`url(${Base})`}}>
            <div className="container row container_row">
              <div className="col-md-3 text-center total_account_div">
                <img src={Icon_1} />
                <h4>7344</h4>
                <p>Total acoounts</p>
              </div>
              <div className="col-md-3 text-center total_account_div">
                <img src={Icons_2} />
                <h4>210</h4>
                <p>Running Days</p>
              </div>
              <div className="col-md-3 text-center total_account_div">
                <img src={Icon_3} />
                <h4>$360105.43</h4>
                <p>Total diposits</p>
              </div>
              <div className="col-md-3 text-center total_account_div">
                <img src={Icon_4} />
                <h4>$236964.37</h4>
                <p>Total withdraws</p>
              </div>
            </div>
          </div>
          <div className="graph_container">
            <div className="container">
              <img src={Graph} />
            </div>
          </div>
        </div>
        <div className="recent_transactions" style={{backgroundImage:`url(${Background})`}}>
          <div className="container">
            <h2 className="section_heading">Recent transactions</h2>
            <p className="section_content recent_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Sed volutpat vulputate ut fermentum tristique fermentum posuere.</p>
            <div className="row">
              <div className="col-md-6">
                <div className="last_depositcontainer">
                  <div className="last_deposittablehead">
                    <img src={LastDeposit} />
                    <p className="last_diposit">Last diposit<br /><span>#1</span></p>
                  </div>
                  <div className="table bicoin_table">
                    <table>
                      <tr>
                        <td className="bitcoin"><img src={TableIcon1} />
                          <p>Bitcoin<br /><span>BTC</span></p>
                        </td>
                        <td className="eigineer">Eigineer</td>
                        <td className="dolar_text">$130.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Dash} />
                          <p>Dash<br /><span>DASH</span></p>
                        </td>
                        <td className="eigineer">Firstspoty</td>
                        <td className="dolar_text">$1410.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Ethereum} />
                          <p>Ethereum<br /><span>ETH</span></p>
                        </td>
                        <td className="eigineer">Cryptographic</td>
                        <td className="dolar_text">$539.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Litecoin3} />
                          <p>Litecoin<br /><span>LTC</span></p>
                        </td>
                        <td className="eigineer">Eigineer</td>
                        <td className="dolar_text">$130.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Ripple} />
                          <p>Ripple<br /><span>XRP</span></p>
                        </td>
                        <td className="eigineer">Cryptotech</td>
                        <td className="dolar_text">$644.00</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="last_depositcontainer">
                  <div className="last_deposittablehead">
                    <img src={LastWithdraw} />
                    <p className="last_diposit">Last Withdraw<br /><span>#2</span></p>
                  </div>
                  <div className="table bicoin_table">
                    <table>
                      <tr>
                        <td className="bitcoin"><img src={TableIcon1} />
                          <p>Bitcoin<br /><span>BTC</span></p>
                        </td>
                        <td className="eigineer">Eigineer</td>
                        <td className="dolar_text">$130.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Dash} />
                          <p>Dash<br /><span>DASH</span></p>
                        </td>
                        <td className="eigineer">Firstspoty</td>
                        <td className="dolar_text">$1410.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Ethereum} />
                          <p>Ethereum<br /><span>ETH</span></p>
                        </td>
                        <td className="eigineer">Cryptographic</td>
                        <td className="dolar_text">$539.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Litecoin3} />
                          <p>Litecoin<br /><span>LTC</span></p>
                        </td>
                        <td className="eigineer">Eigineer</td>
                        <td className="dolar_text">$130.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Ripple} />
                          <p>Ripple<br /><span>XRP</span></p>
                        </td>
                        <td className="eigineer">Cryptotech</td>
                        <td className="dolar_text">$644.00</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container row why_choose container_row">
          <div className="col-md-7">
            <h2 className="section_heading pb-5">Why choose us</h2>
            <p className="section_content">World Funds strives to be worthy of our client’s trust by
            providing them with services which are economically
            beneficial to them and to create awareness regarding
            reliable and highly profitable investment platform
          among our clients around the globe.</p>

            <p className="section_content">All you need to do is sit back and enjoy how your
          profit grows on a daily basis. </p>
          </div>
          <div className="col-md-5">
            <img src={ImageGirl} />
          </div>
        </div>
        <div className="Get_started_today">
          <p>Get started today!</p>
          <div className="form-group has-search">
            <i className="fa fa-envelope emailicon"></i>
            <input type="text" className="form-control" placeholder="Enter your email" />
            <div className="arrow_container"><img src={Arrow} className="arrow_img" /></div>
          </div>
        </div>
        <div className="container row container_row investingimg_maincontainer">
          <div className="col-md-3 investingimg_div">
            <img src={Rocket} />
          </div>
          <div className="col-md-9 investing_div">
            <h4>Ready to Start Investing?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue in morbi massa non platea.
            Interdum ac in placerat vel. Enim odio felis adipiscing amet, condimentum ac sed pulvinar sit.
            Nisl, amet, ac etiam tortor, non quis risus. Feugiat eu, dictum blandit neque egestas eget et urna,
          lorem. Sed at porttitor libero cras.</p>
            <button>Invest Now</button>
          </div>
        </div>
        <div className="footer_container" style={{backgroundImage:`url(${Footer_wave})`}}>
          <div className="row container container_row footer">
            <div className="col-md-3">
              <img src={Logo} />
            </div>
            <div className="col-md-2">
              <ul className="first_col">
                <li>Main</li>
                <li>Investments</li>
                <li>Partner program</li>
                <li>News</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li>Home</li>
                <li>Get Started</li>
                <li>Institutions</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>Privacy policy</li>
                <li>Risk disclosure</li>
                <li>AML policy</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li>info@cia.com</li>
                <li>Risk disclosure</li>
              </ul>
            </div>
          </div>
          <div className="container copyright">
            <p>Copyright © 2020 World Funds All rights reserved.</p>
          </div>
          <div className="chat_btns">
            <p className="chat_withus">Chat with us<img src={ChatSmall} /></p>
            <p><img src={ChatBig} /></p>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;

