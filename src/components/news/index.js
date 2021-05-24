import React from 'react';
import HomeNav from '../homenav';
import Newsdescription from '../newsdescription';
import chat_small from '../../assets/images/chat_small.png';
import Chat_big from '../../assets/images/Chat_big.png';
import Logo from '../../assets/images/Logo.png';
import Base from '../../assets/images/Base.png';
import Footer_wave from '../../assets/images/Footer_wave.png';
import First from '../../assets/images/First.png';
import Arrow from '../../assets/images/Arrow.png';
import Date_calander from '../../assets/images/Date_calander.png';
import Recent1 from '../../assets/images/Recent1.png';
import Recent2 from '../../assets/images/Recent2.png';
import Recent3 from '../../assets/images/Recent3.png';
import Recent4 from '../../assets/images/Recent4.png';
// import Reactslider from '../reactslider/Reactslider'
import './news.css';
import { useHistory } from 'react-router';
const News = () => {
  let history = useHistory();
  const HandleReadMore = () =>{
    return history.push('/newsDespriction')
  }
    return (
        <div className="home_maincontainer news_page">
            <div className="ourpolicies_container">
            <div className="container">
                <HomeNav />
            </div>
            </div>
  
            <div className="privacy_policycontainer news_container" style={{backgroundImage:`url(${Base})`}}>
              <div className="container">
                  <h2>News</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse orci.</p>
              </div>
            </div>
            <div className="container news_datacontainer">
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12">
                  <div className="news_details">
                    <span>Category ,  April 2021</span>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa posuere quam quam aliquet 
                      ornare. Diam lobortis nibh sit sed. Nisi, gravida in a viverra pellentesque neque penatibus 
                      turpis. Nam diam id cursus dignissim nec, cras. Aliquet eget quis netus accumsan volutpat, 
                      faucibus lectus felis. Vitae donec posuere tempus amet, habitant nisi. Etiam nulla rutrum 
                      lacinia morbi mauris, sit sed parturient. Ac elit tincidunt a, molestie dui lacus nisi 
                      tristique turpis. Turpis tortor tristique maecenas duis habitant. Pellentesque 
                      ipsum vulputate purus vestibulum quis. Eu proin sit congue iaculis dignissim augue.</p>
                    <div className="read_morebtn">
                    <button type="submit" class="Read_More"  > Read More</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="right_sideimg">
                    <img src={First} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
{/* ------------------- */}
            <div className="container-fluid p-5">
              <div className="row">
                <div className="col-md-12">
                   <div className="news_lettersection " style={{backgroundImage:`url(${Base})`}}>
                    <div className="container">
                      <div className="row">
                        <div class="newsletter_text col-md-6">
                          <p className="new_text">Subscribe to our Newsletter</p>
                          <p className="loream_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-md-6">
                          <div class="form-group has-search1 ">
                            <input type="text" class="form-control" placeholder="Enter your email"/>
                              <div class="arrow_container1">
                                <img src={Arrow} class="arrow_img1" alt=""/>
                                </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                   </div>
                 </div>
              </div>
            </div>
{/* ------------------------ */}
        <div className="container recent_articlesection">
          <div className="row">
            <div className="col-md-12 mb-5">
               <h2 className="recent_article">Recent Articles</h2>
            </div>
          </div>
          <a href="">
            <div className="row mt-5">
              <div className="col-xl-6 col-lg-6 col-md-4">
                <div className="border-radius">
                    <img src={Recent1} class="" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="recent_detail">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat pellentesque </h4>
                  <p className="date_head">
                    <img src={Date_calander} class="Date_calander" alt=""/>
                    April 24, 2021</p>
                  <p className="loream_head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vitae consectetur 
                    risus sollicitudin. Tortor, cras vestibulum nunc neque aliquet. Quis urna nascetur vel amet.
                    Sit vitae, nunc, ante in cursus at. Proin justo pellentesque condimentum tristique vulputate facilisi 
                    lectus euismod accumsan.Integer porta non, bibendum et et, sed. Et amet id leo sed sapien.....</p>
                </div>
                <div className="read_morebtnnew">
                  <button type="submit" class="Read_Morenew" onClick={() => HandleReadMore()}> Read More</button>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="row mt-5">
              <div className="col-xl-6 col-lg-6 col-md-4">
                <div className="border-radius">
                    <img src={Recent2} class="" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="recent_detail">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat pellentesque </h4>
                  <p className="date_head">
                    <img src={Date_calander} class="Date_calander" alt=""/>
                    April 24, 2021</p>
                  <p className="loream_head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vitae consectetur 
                    risus sollicitudin. Tortor, cras vestibulum nunc neque aliquet. Quis urna nascetur vel amet.
                    Sit vitae, nunc, ante in cursus at. Proin justo pellentesque condimentum tristique vulputate facilisi 
                    lectus euismod accumsan.Integer porta non, bibendum et et, sed. Et amet id leo sed sapien.....</p>
                </div>
                <div className="read_morebtnnew">
                  <button type="submit" class="Read_Morenew"> Read More</button>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="row mt-5">
              <div className="col-xl-6 col-lg-6 col-md-4">
                <div className="border-radius">
                    <img src={Recent3} class="" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="recent_detail">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat pellentesque </h4>
                  <p className="date_head">
                    <img src={Date_calander} class="Date_calander" alt=""/>
                    April 24, 2021</p>
                  <p className="loream_head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vitae consectetur 
                    risus sollicitudin. Tortor, cras vestibulum nunc neque aliquet. Quis urna nascetur vel amet.
                    Sit vitae, nunc, ante in cursus at. Proin justo pellentesque condimentum tristique vulputate facilisi 
                    lectus euismod accumsan.Integer porta non, bibendum et et, sed. Et amet id leo sed sapien.....</p>
                </div>
                <div className="read_morebtnnew">
                  <button type="submit" class="Read_Morenew"> Read More</button>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="row mt-5">
              <div className="col-xl-6 col-lg-6 col-md-4">
                <div className="border-radius">
                    <img src={Recent4} class="" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="recent_detail">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat pellentesque </h4>
                  <p className="date_head">
                    <img src={Date_calander} class="Date_calander" alt=""/>
                    April 24, 2021</p>
                  <p className="loream_head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vitae consectetur 
                    risus sollicitudin. Tortor, cras vestibulum nunc neque aliquet. Quis urna nascetur vel amet.
                    Sit vitae, nunc, ante in cursus at. Proin justo pellentesque condimentum tristique vulputate facilisi 
                    lectus euismod accumsan.Integer porta non, bibendum et et, sed. Et amet id leo sed sapien.....</p>
                </div>
                <div className="read_morebtnnew">
                  <button type="submit" class="Read_Morenew"> Read More</button>
                </div>
              </div>
            </div>
          </a>
          <div className="row text-center">
            <div className="more_newsbtndiv col-md-12">
                <button type="submit" class="more_newsbtn">More News</button>
            </div>
          </div>
        </div>

  
     
  
  
  
  
  
  
  
  
  
  
        <div className="footer_container" style={{backgroundImage:`url(${Footer_wave})`}}>
          <div className="row container container_row footer">
            <div className="col-md-3 margin_bottom">
              <img src={Logo} alt=""/>
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
            <p><img src={Chat_big} alt=""/></p>
          </div>
        </div>
      </div>
    )

 
}

export default News;