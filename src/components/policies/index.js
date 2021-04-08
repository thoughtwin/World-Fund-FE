import React from 'react';
import HomeNav from '../homenav';
import Logo from '../../assets/images/Logo.png';
import chat_small from '../../assets/images/chat_small.png'
import Chat_big from '../../assets/images/Chat_big.png';
import Footer_wave from '../../assets/images/Footer_wave.png';
import Base from '../../assets/images/Base.png';
const OurPolicies = ()=>{
  return(
    <div className="home_maincontainer">
        <div className="ourpolicies_container">
            <div className="container">
                <HomeNav/>
            </div>
        </div>

        <div className="privacy_policycontainer" style={{backgroundImage:`url(${Base})`}}>
            <div className="container">
                <span>Home  /  Privacy Policy</span>
                <h2>Our Policies</h2>
            </div>
        </div>

        <div className="container policies_textcontent">
            <p>We collect and generate various data points about you.</p>
            <p>Data by which you are identified is termed as “Personal Data”. Personal Data does not mean information that is freely available or accessible in public domain.</p>
            <p>Your Privacy is of utmost importance to us and protection of your Personal Data is a key commitment for us.</p>
            <p>We are governed by the provisions of applicable law in India including the Information Technology Act 2000 and the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 to maintain the privacy of your Personal Data.</p>

            <h3>I. Personal Data</h3>
            <p>Personal Data we may collect from you are as under:</p>
            <p>1. Personal details (e.g. name, contact details including, residential address, date of birth, documents such as identity card / passport details / Aadhaar details / PAN / Voter ID / driving license, and/or education details) provided by you to us to avail various products/services from us.</p>
            <p>2. Your details including transaction history, balances, payment details, for effecting transfer of monies through various payment channels provided by us.</p>
            <p>3. financial details (e.g. income, expenses, and/or credit history) needed as part of request for some of our products/services;</p>
            <p>4. images of documents/ photos required to avail any of our products/services.</p>
            <p>5. voice recordings of our conversations with our customer care agent with you to address your queries/grievances;</p>
            <p>6. employment details (e.g. occupation, positions held, employment history, salary and/or benefits) as part of our record retention for credit/various product evaluations or required under applicable law including Prevention of Money Laundering (Maintenance of Records) Rules, 2005</p>
            <p>7. specimen signature(s) for processing of your instructions received by us through our various payment and delivery channels;</p>
            <p>8. opinions provided by you to us by way of feedback or responses to surveys;</p>
            <p>9. information obtained from your mobile device by way of using our app like device location, communication information including contacts and call logs, device information (including storage, model, mobile network), transactional and promotional SMS/app notifications.</p>

            <h3>II. Cookie Policy</h3>
            <p>1. Please note that a “cookie” is a small piece of information stored by a web server on a web browser so it can be later read back from that browser.</p>
            <p>2. We may use cookie and tracking technology depending on the features offered.</p>
            <p>3. No Personal Data will be collected via cookies and other tracking technology; however, if you previously provided Personal Data, cookies may be tied to such information.</p>

            <h3>III. Links to other websites</h3>
            <p>Our website may contain links to other websites which are not maintained by us. This privacy policy only applies to us. You are requested to read the other websites’ privacy policies when visiting these websites.</p>

            <h3>IV. Reasonable Security Practices and Procedures</h3>
            <p>We take various steps and measures to protect the security of your Personal Data from misuse, loss, unauthorised access, modification or disclosure. We use latest secure server layers encryption and access control on our systems. Our safety and security processes are audited by a third party cyber security audit agency from time to time.</p>
            <p>We have provided multiple levels of security to safeguard your app by Login/Logout option and AppLock feature that can be enabled by you. We also ensure the device binding so that the same login cannot be used on different device without any additional authentication/OTP. Please do not share your Paytm login, password and OTP details with anybody.</p>
        </div>

        


       




        <div className="footer_container" style={{backgroundImage:`url(${Footer_wave})`}}>
            <div className="row container container_row footer">
                <div className="col-md-3 margin_bottom">
                    <img src={Logo}/>
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
                <p className="chat_withus">Chat with us<img src={chat_small}/></p>
                <p><img src={Chat_big}/></p>
            </div>
        </div>
    </div>
  )
} 
export default OurPolicies;