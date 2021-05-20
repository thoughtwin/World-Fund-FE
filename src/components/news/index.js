import React from 'react';
import HomeNav from '../homenav';
import chat_small from '../../assets/images/chat_small.png';
import Chat_big from '../../assets/images/Chat_big.png';
import Logo from '../../assets/images/Logo.png';
import Base from '../../assets/images/Base.png';
import Footer_wave from '../../assets/images/Footer_wave.png';

const News = () => {
    return (
        <div className="home_maincontainer news_page">
            <div className="ourpolicies_container">
            <div className="container">
                <HomeNav />
            </div>
            </div>
  
            <div className="privacy_policycontainer news_container" style={{backgroundImage:`url(${Base})`}}>
            <div className="container">
                <span>Home  /  FAQ</span>
                <h2>News</h2>
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

export default News;