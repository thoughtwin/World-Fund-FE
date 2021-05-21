import React from 'react';
import HomeNav from '../homenav';
import chat_small from '../../assets/images/chat_small.png';
import Chat_big from '../../assets/images/Chat_big.png';
import Logo from '../../assets/images/Logo.png';
import Base from '../../assets/images/Base.png';
import Footer_wave from '../../assets/images/Footer_wave.png';
import './contact.css';
const Contact = () => {
    return(
        <div className="home_maincontainer contact_us_page">
        <div className="ourpolicies_container">
        <div className="container">
            <HomeNav />
        </div>
        </div>

        <div className=" contactUs_container">
          <div className="container">
              <span className="breacrumbs_text">Home  /  Contact US</span>
            <div className="row">
              <div className="col-md-12">
                <h3 className="contact_head">We are a financial investment company where you can be the part of 
                  its investment community worldwide. </h3>
              </div>
              <div className="col-md-12">
                <div className="contact_detailwidth">
                  <p className="contact_position">
                    contact us
                  </p>
                  <div className="contact_detail">
                    <h4>Tell us about yourself</h4>
                    <p className="privacy_text">By filling in the form, you agree to our Privacy Policy, including our cookie use.</p>
                    <p className="free_text">Schedule a free consultation at hello@worldfunds.com, or fill out the form and we will follow up with you shortly.</p>
                    <form>
                      <div class="field">
                        <input type="text" required autocomplete="off" id="password"/>
                        <label for="password" title="Email" data-title="Email"></label>
                      </div>
                      <div class="field fname_feild">
                        <input type="text" required autocomplete="off" id="fname"/>
                        <label for="fname" title="First name" data-title="First name"></label>
                      </div>
                      <div class="field lname_feild">
                        <input type="text" required autocomplete="off" id="lname"/>
                        <label for="lname" title="Last name" data-title="Last name"></label>
                      </div>
                      <div className="text_area">
                        <label>Enter details</label>
                        <textarea className="form-control" rows="5"> Short description</textarea>
                      </div>
                      <div class="checkbox ">
                        <label><input type="checkbox" name="remember"/> Keep me up-to-date with latest news of investments</label>
                      </div>
                      <button type="submit" class="invest_nowus">invest now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 










    <div className="footer_container" style={{backgroundImage:`url(${Footer_wave})`}}>
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
          <ul className="footer_email">
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

export default Contact;