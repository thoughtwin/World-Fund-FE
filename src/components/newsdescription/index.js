import React from 'react';
import HomeNav from '../homenav';
import chat_small from '../../assets/images/chat_small.png';
import Chat_big from '../../assets/images/Chat_big.png';
import Logo from '../../assets/images/Logo.png';
import Base from '../../assets/images/Base.png';
import Footer_wave from '../../assets/images/Footer_wave.png';
import Search_input from '../../assets/images/Search_input.png';
import Profile_img from '../../assets/images/Profile_img.png';
import News_calender from '../../assets/images/News_calender.png';
import Business from '../../assets/images/Business.png';
import Date_calander from '../../assets/images/Date_calander.png';
import Latest1 from '../../assets/images/Latest1.png';
import Latest2 from '../../assets/images/Latest2.png';
import Latest3 from '../../assets/images/Latest3.png';
import Latest4 from '../../assets/images/Latest4.png';
import Latest5 from '../../assets/images/Latest5.png';
import Latest6 from '../../assets/images/Latest6.png';
import Arrow from '../../assets/images/Arrow.png';
import './newsdes.css';
 const test = () =>{

    return (
        <div className="home_maincontainer newsdes_page">
            <div className="ourpolicies_container">
                <div className="container">
                    <HomeNav />
                </div>
            </div>
            
            <div className="container newsdescription_container">
              <div className="row">
                <div className=" col-md-12">
                  <span className="breacrumbs_text">Home / Affiliate</span>
                </div>
                <div className=" col-md-12">
                  <p className="Categories_text">Categories</p>
                </div>
              </div>
              <div className="row Padding_top">
                  {/* left col */}
                <div className="col-xl-8 col-lg-8 col-md-8 news_content">
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                  <div className="profile_content">
                      <ul className="list-inline">
                          <li className="list-inline-item">
                             <img src={Profile_img} class="" alt=""/>
                             <p>maya sullivan</p>
                          </li>
                          <li className="list-inline-item">
                               <img src={News_calender} class="" alt=""/>
                               <p className="profile_content1">April 24, 2021</p>
                          </li>
                      </ul>
                  </div>
                  <div className="mt-5">
                    <img src={Business} class="" alt="" width="100%"/>
                    <div className="news_section pt-5 mt-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat massa arcu risus nam 
                            aliquet senectus quam tristique et. Vel erat a, ut viverra aliquam. Eros nisl eu et, 
                            maecenas. Quis faucibus volutpat at dictum morbi nulla augue. Mauris cursus mauris rutrum 
                            molestie et donec viverra. Egestas tellus eget ultrices suspendisse vitae gravida. Lectus 
                            id amet proin id. Aenean eget amet, pharetra elit proin libero consectetur. Elit sit ut urna, 
                            odio porttitor arcu aliquam dignissim. Consequat sed molestie nec dui venenatis cursus. 
                            Tincidunt scelerisque mattis elit at quam pellentesque id id. Lorem faucibus lacinia aliquam
                            nec, pellentesque.
                        </p> 
                        <p>Fringilla adipiscing aliquet eros, hendrerit eget tincidunt purus est.
                            Parturient quis nunc, viverra et nec diam sagittis cras. Magna eget commodo viverra massa
                            sed consectetur.
                        </p>
                        <p> Fringilla adipiscing aliquet eros, hendrerit eget tincidunt purus est.
                            Parturient quis nunc, viverra et nec diam sagittis cras. Magna eget commodo viverra massa
                            sed consectetur. Elementum tellus cursus cursus magna diam. Tempor diam enim aliquam sed
                           lorem. Ultrices pellentesque pretium semper fermentum arcu ultrices diam volutpat, quis
                        </p> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat massa arcu risus nam 
                            aliquet senectus quam tristique et. Vel erat a, ut viverra aliquam. Eros nisl eu et, 
                            maecenas. Quis faucibus volutpat at dictum morbi nulla augue. Mauris cursus mauris rutrum
                           molestie et donec viverra. Egestas tellus eget ultrices suspendisse vitae gravida. 
                            Lectus id amet proin id. Aenean eget amet, pharetra elit proin libero consectetur.
                            Elit sit ut urna, odio porttitor arcu aliquam dignissim. Consequat sed molestie nec dui
                            venenatis cursus. Tincidunt scelerisque mattis elit at quam pellentesque id id.
                            Lorem faucibus lacinia aliquam nec, pellentesque. 
                        </p>
                        <p>Fringilla adipiscing aliquet eros, 
                        hendrerit eget tincidunt purus est. Parturient quis nunc, viverra et nec diam sagittis 
                        cras. Magna eget commodo viverra massa sed consectetur. Fringilla adipiscing aliquet 
                        eros, hendrerit eget tincidunt purus est. Parturient quis nunc, viverra et nec diam
                            sagittis cras. Magna eget commodo viverra massa sed consectetur. Elementum tellus
                            cursus cursus magna diam. Tempor diam enim aliquam sed lorem. Ultrices pellentesque
                            pretium semper fermentum arcu ultrices diam volutpat, quis.Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Volutpat massa arcu risus nam aliquet senectus quam tristique
                            et. Vel erat a, ut viverra aliquam. Eros nisl eu et, maecenas. Quis faucibus volutpat at 
                            dictum morbi nulla augue. Mauris cursus mauris rutrum molestie et donec viverra. Egestas
                                tellus eget ultrices suspendisse vitae gravida. Lectus id amet proin id. Aenean eget
                                amet, pharetra elit proin libero consectetur. Elit sit ut urna, odio porttitor arcu
                                aliquam dignissim. Consequat sed molestie nec dui venenatis cursus. Tincidunt scelerisque
                            mattis elit at quam pellentesque id id. Lorem faucibus lacinia aliquam nec, pellentesque
                         </p>
                    </div>
                  </div>
                </div>
                {/* left col */}

                {/* right col */}
                <div className="col-md-4 right_content">
                    <div class="form-group has-search1 ">
                        <input type="text" class="form-control" placeholder="Search..."/>
                        <div class="arrow_container1">
                            <img src={Search_input} class="arrow_img1" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <h2 className="recent_article">Latest News</h2>
                    </div>
                    <div className="row Latest_newsmargin">
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-5 col-6">
                            <div className="border-radius1">
                                <img src={Latest1} class="" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 p-0 col-6">
                            <div className="recent_detail1">
                                <p className="recent_cate">Categories</p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            <p className="date_head">
                                <img src={Date_calander} class="Date_calander" alt=""/>
                                April 24, 2021</p>
                            </div>
                        </div>
                        {/* --------------- */}
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-5 col-6">
                            <div className="border-radius1">
                                <img src={Latest2} class="" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 p-0 col-6">
                            <div className="recent_detail1">
                                <p className="recent_cate">Categories</p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            <p className="date_head">
                                <img src={Date_calander} class="Date_calander" alt=""/>
                                April 24, 2021</p>
                            </div>
                        </div>
                         {/* --------------- */}
                         <div className="col-xl-6 col-lg-6 col-md-6 mb-5 col-6">
                            <div className="border-radius1">
                                <img src={Latest3} class="" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 p-0 col-6">
                            <div className="recent_detail1">
                                <p className="recent_cate">Categories</p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            <p className="date_head">
                                <img src={Date_calander} class="Date_calander" alt=""/>
                                April 24, 2021</p>
                            </div>
                        </div>
                         {/* --------------- */}
                         <div className="col-xl-6 col-lg-6 col-md-6 mb-5 col-6">
                            <div className="border-radius1">
                                <img src={Latest4} class="" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 p-0 col-6">
                            <div className="recent_detail1">
                                <p className="recent_cate">Categories</p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            <p className="date_head">
                                <img src={Date_calander} class="Date_calander" alt=""/>
                                April 24, 2021</p>
                            </div>
                        </div>
                         {/* --------------- */}
                         <div className="col-xl-6 col-lg-6 col-md-6 mb-5 col-6">
                            <div className="border-radius1">
                                <img src={Latest5} class="" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 p-0 col-6">
                            <div className="recent_detail1">
                                <p className="recent_cate">Categories</p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h4>
                            <p className="date_head">
                                <img src={Date_calander} class="Date_calander" alt=""/>
                                April 24, 2021</p>
                            </div>
                        </div>
                        {/* ------------ */}
                        <div className="col-md-12 mt-5">
                            <div className="card border-0">
                                <img src={Latest6} class="" alt="" width="100%"/>
                                <div className="card-body card_area">
                                <a href="#" class="btn category_button">Category</a>
                                <p className="card-para">
                                Lorem ipsum dolor Maxims amet, consectetur adipiscing
                                </p>
                                <p className="card_date">April 24, 2021</p>
                                </div>
                            </div>
                        </div>
                        {/* ---------------- */}
                  </div>
                </div>
                {/* right col */}
                

              </div>
            </div>

            <div className="container-fluid p-xl-0 p-lg-0 news_letter">
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


            <div className="container related_newsdiv">
                <div className="row">
                    <div className="col-md-12">
                        <div className="border-position"></div>
                        <h2>Related News</h2>
                    </div>
                </div>
                <div className="row margin60px">
                    <div className="col-md-4">
                        <div className="card border-0">
                                <img src={Latest1} class="bg_img" alt="" width="100%"/>
                                <div className="card-body card_area1">
                                <p className="cate_text">Category</p>
                                <p className="card-para1">
                                Lorem ipsum dolor Maxims amet, consectetur adipiscing
                                </p>
                                <p className="card_paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nam nisl, malesuada rhoncus quam a egestas eu. Nisl iaculis a, viverra ultricies tortor pulvinar. Lectus porttitor in
                                 aliquam amet at et in. Facilisis pulvinar enim egestas a. Amet nulla et tortor gravida morbi.
                                </p>
                                <p className="card_date1">
                                <img src={Date_calander} class="mr-3" alt="" width=""/>
                                    April 24, 2021
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                                <img src={Latest2} class="bg_img" alt="" width=""/>
                                <div className="card-body card_area1">
                                <p className="cate_text">Category</p>
                                <p className="card-para1">
                                Lorem ipsum dolor Maxims amet, consectetur adipiscing
                                </p>
                                <p className="card_paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nam nisl, malesuada rhoncus quam a egestas eu. Nisl iaculis a, viverra ultricies tortor pulvinar. Lectus porttitor in
                                 aliquam amet at et in. Facilisis pulvinar enim egestas a. Amet nulla et tortor gravida morbi.
                                </p>
                                <p className="card_date1">
                                <img src={Date_calander} class="mr-3" alt="" width=""/>
                                    April 24, 2021
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                                <img src={Latest3} class="bg_img" alt="" width="100%"/>
                                <div className="card-body card_area1">
                                <p className="cate_text">Category</p>
                                <p className="card-para1">
                                Lorem ipsum dolor Maxims amet, consectetur adipiscing
                                </p>
                                <p className="card_paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nam nisl, malesuada rhoncus quam a egestas eu. Nisl iaculis a, viverra ultricies tortor pulvinar. Lectus porttitor in
                                 aliquam amet at et in. Facilisis pulvinar enim egestas a. Amet nulla et tortor gravida morbi.
                                </p>
                                <p className="card_date1">
                                <img src={Date_calander} class="mr-3" alt="" width=""/>
                                    April 24, 2021
                                    </p>
                                </div>
                        </div>
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

export default test;