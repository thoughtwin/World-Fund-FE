import React from 'react';
import Logo from '../../assets/images/Logo.png';
import abouticonblack1 from '../../assets/images/abouticonblack1.png';
import abouticongreen1 from '../../assets/images/abouticongreen1.png';
import abouticonblack2 from '../../assets/images/abouticonblack2.png';
import abouticongreen2 from '../../assets/images/abouticongreen2.png';
import abouticonblack3 from '../../assets/images/abouticonblack3.png';
import abouticongreen3 from '../../assets/images/abouticongreen3.png';
import abouticonblack4 from '../../assets/images/abouticonblack4.png';
import abouticongreen4 from '../../assets/images/abouticongreen4.png';
import Footer_wave from '../../assets/images/Footer_wave.png';
import aboutgraph from '../../assets/images/aboutgraph.png';
import tableIcon1 from '../../assets/images/tableIcon1.png';
import dash from '../../assets/images/dash.png';
import aboutusbanner from '../../assets/images/aboutusbanner.png';
// import { Link } from 'react-router-dom';
import Ethereum from '../../assets/images/Ethereum.png';
import litecoin3 from '../../assets/images/litecoin3.png';
import Ripple from '../../assets/images/Ripple.png';
import doteline from '../../assets/images/doteline.png';
import chat_small from '../../assets/images/chat_small.png';
import Chat_big from '../../assets/images/Chat_big.png';
import Last_deposit from '../../assets/images/Last_deposit.png';
import management_containerbg from '../../assets/images/management_containerbg.png';
import aboutBase from '../../assets/images/aboutBase.png';
import Background_globe from '../../assets/images/Background_globe.png'
import HomeNav from '../homenav';
const About = () => {
  return (
    <div className="home_maincontainer">
      <div className="header_banner aboutus_banner" style={{ backgroundImage: `url(${aboutusbanner})` }}>
        <div className="container">
          <HomeNav />
          <div className="banner_Container">
            <h1>Who are we?</h1>
            <p>We are a financial invstment company where you<br /> can be the part of its investment community worldwide.</p>
          </div>
        </div>
      </div>

      <div className="recent_transactions management_container" style={{ backgroundImage: `url(${management_containerbg})` }}>
        <div className="container">
          <h2 className="section_heading">We are Asset Management Fund, <br />based on artificial intelligence.</h2>
          <p className="section_content">We have a huge range of tasks, but we solve each of them  as efficiently as<br />
                     possible. Create a free account, to assess our capabilities!</p>
          <div className="row">
            <div className="col-md-3">
              <div className="management_card">
                <img src={abouticonblack1} className="blackimg" />
                <img src={abouticongreen1} className="greenimg" />
                <p>INNOVATIVE AI World funds TRADING DESK SYSTEM</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="management_card">
                <img src={abouticonblack2} className="blackimg" />
                <img src={abouticongreen2} className="greenimg" />
                <p>FINANCIAL MANAGEMENT FROM ANYWHERE IN THE WORLD</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="management_card">
                <img src={abouticonblack3} className="blackimg" />
                <img src={abouticongreen3} className="greenimg" />
                <p>INSTANT DEPOSIT IN ANY OF THE CURRENCIES*</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="management_card">
                <img src={abouticonblack4} className="blackimg" />
                <img src={abouticongreen4} className="greenimg" />
                <p>THE ABILITY TO CREATE AN AFFILIATE NETWORK</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="securely_container introducing_container">
        <h2 className="section_heading">Introducing you VTU -<span> World Funds Turbo Unit.</span><br />
                A revolutionary financial instrument.</h2>
        <p className="section_content">VTU units are the internal currency of the VIA platform. Each participant of the VIA platform has the opportunity to<br /> purchase VTU units by creating a deposit, or place a purchase order on the internal VTU exchange.</p>
        <div className="aboutusgraph">
          <img src={aboutgraph} />
        </div>
        <div className="total_acoounts innovative_container" style={{ backgroundImage: `url(${aboutBase})` }}>
          <div className="container row container_row">
            <div className="col-md-6">
              <h4 className="Investment_heading">Investment is a Difficult task.<br />
                <span>But not for us</span></h4>
              <p className="Investment_text">Using an innovative AI World Funds Trading Desk module we provide a stable daily income for 19,038 investors around the globe</p>
              <button className="Invest_Nowbutton">Invest Now</button>
            </div>
            <div className="col-md-6 diposit_text">
              <div className="last_depositcontainer">
                <div className="last_deposittablehead">
                  <img src={Last_deposit} />
                  <p>Last diposit<br /><span>#1</span></p>
                </div>
                <div className="table bicoin_table">
                  <table>
                    <tbody><tr>
                      <td className="bitcoin"><img src={tableIcon1} /><p>Bitcoin<br /><span>BTC</span></p></td>
                      <td className="eigineer">Eigineer</td>
                      <td className="dolar_text">$130.00</td>
                    </tr>
                      <tr>
                        <td className="bitcoin"><img src={dash} /><p>Dash<br /><span>DASH</span></p></td>
                        <td className="eigineer">Firstspoty</td>
                        <td className="dolar_text">$1410.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Ethereum} /><p>Ethereum<br /><span>ETH</span></p></td>
                        <td className="eigineer">Cryptographic</td>
                        <td className="dolar_text">$539.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={litecoin3} /><p>Litecoin<br /><span>LTC</span></p></td>
                        <td className="eigineer">Eigineer</td>
                        <td className="dolar_text">$130.00</td>
                      </tr>
                      <tr>
                        <td className="bitcoin"><img src={Ripple} /><p>Ripple<br /><span>XRP</span></p></td>
                        <td className="eigineer">Cryptotech</td>
                        <td className="dolar_text">$644.00</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="world_belongs" style={{ backgroundImage: `url(${Background_globe})` }}>
        <div className="container row container_row">
          <h4>The whole world belongs<br /><span> only to You!</span></h4>
          <p>Find out what unites <span>19,038</span> partners around the world and how they earned <span>1,225,300</span> dollars due to it.</p>
          <button className="Invest_Nowbutton">Invest Now</button>
        </div>
      </div>

      <div className="acquaintance_container">
        <div className="container row container_row">
          <h4>Start your acquaintance<br />
                    with simple investments in <span> 3 simple steps.</span></h4>
          <p className="creatingaccounttext">Investing with us is very easy, see for yourself,<span> by creating a free account.</span></p>
          <div className="col-md-4">
            <div className="create_accountdiv">
              <span>01</span>
              <h6>Create a free account
              in 3 minutes
                            </h6>
              <p>Creating an account with VIA is absolutely free and will not take you
                            more than 3 minutes.</p>
            </div>
            <div className="dotline"><img src={doteline} /></div>
          </div>
          <div className="col-md-4">
            <div className="create_accountdiv">
              <span>02</span>
              <h6>Create a free account
              in 3 minutes
                            </h6>
              <p>Creating an account with VIA is absolutely free and will not take you
                            more than 3 minutes.</p>
            </div>
            <div className="dotline"><img src={doteline} /></div>
          </div>
          <div className="col-md-4">
            <div className="create_accountdiv">
              <span>03</span>
              <h6>Create a free account
              in 3 minutes
                            </h6>
              <p>Creating an account with VIA is absolutely free and will not take you
                            more than 3 minutes.</p>
            </div>
          </div>
        </div>
      </div>




      <div className="footer_container" style={{ backgroundImage: `url(${Footer_wave})` }}>
        <div className="row container container_row footer">
          <div className="col-md-3 margin_bottom">
            <img src={Logo} />
          </div>
          <div className="col-md-2 margin_bottom">
            <ul>
              <li>Main</li>
              <li>Investments</li>
              <li>Partner program</li>
              <li>News</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-2 margin_bottom">
            <ul>
              <li>Home</li>
              <li>Get Started</li>
              <li>Institutions</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3 margin_bottom">
            <ul>
              <li>Privacy policy</li>
              <li>Risk disclosure</li>
              <li>AML policy</li>
            </ul>
          </div>
          <div className="col-md-2 margin_bottom">
            <ul>
              <li className="footer_emailicon"><i className="fa fa-envelope"></i>info@cia.com</li>
              <li><span className="footericon"><i className="fa fa-facebook-f"></i></span><span className="footericon_paper"><i className="fa fa-paper-plane"></i></span></li>
            </ul>
          </div>
        </div>
        <div className="container copyright"><i className="fas fa-paper-plane"></i>
          <p>Copyright © 2020 World Funds All rights reserved.</p>
        </div>
        <div className="chat_btns">
          <p className="chat_withus">Chat with us<img src={chat_small} /></p>
          <p><img src={Chat_big} /></p>
        </div>
      </div>
    </div>
  )
}

export default About;