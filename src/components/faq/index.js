import React from 'react';
import HomeNav from '../homenav';
import { Link } from 'react-router-dom';
import questions_green from '../../assets/images/questions_green.png';
import questions from '../../assets/images/questions.png';
import Finance_green from '../../assets/images/Finance_green.png';
import Finance from '../../assets/images/Finance.png';
import Affiliate_program_green from '../../assets/images/Affiliate program_green.png';
import Affiliate_program from '../../assets/images/Affiliate program.png';
import chat_small from '../../assets/images/chat_small.png';
import Chat_big from '../../assets/images/Chat_big.png';
import Logo from '../../assets/images/Logo.png';
import Base from '../../assets/images/Base.png';
import Footer_wave from '../../assets/images/Footer_wave.png';

const Faq = () => {
  return (
    <div className="home_maincontainer">
      <div className="ourpolicies_container">
        <div className="container">
          <HomeNav />
        </div>
      </div>

      <div className="privacy_policycontainer fqa_container" style={{backgroundImage:`url(${Base})`}}>
        <div className="container">
          <span>Home  /  FAQ</span>
          <p>Answers to</p>
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="container fqatabbing_container">
        <ul className="nav nav-tabs tabbing_list">
          <li className="active first_child"><Link data-toggle="tab" to="#home">
            <img src={questions_green} className="financegreenimg" />
            <img src={questions} className="financegblackimg" />
                    General questions</Link></li>
          <li><Link data-toggle="tab" to="#menu1">
            <img src={Finance_green} className="financegreenimg" />
            <img src={Finance} className="financegblackimg" />
                    Financial Questions</Link></li>
          <li className="last_child"><Link data-toggle="tab" to="#menu2">
            <img src={Affiliate_program_green} className="financegreenimg" />
            <img src={Affiliate_program} className="financegblackimg" />
                    Affiliate program</Link></li>
        </ul>
        <h2 className="faq_heading">Financial Questions</h2>
        <p className="faq_contenttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat vulputate ut fermentum tristique fermentum posuere.</p>

        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
            <div className="container accordian_conteiner">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <Link role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What investment income does the VIA platform provide?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is the minimum investment amount I can use to get started?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Why is the platform's profitability lower on weekends than on workdays?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                      You can sell your VTU units according to weekly limits using the internal VTU exchange. You can withdraw the profit from the sold units at any time in any currency convenient for you. You can sell your VTU units according to weekly limits using the internal VTU exchange. You can withdraw the profit from the sold units at any time in any currency convenient for you.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingfour">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapsefour" aria-expanded="false" aria-controls="collapseTwo">
                        What are VTU units?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapsefour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingfive">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapsefive" aria-expanded="false" aria-controls="collapseTwo">
                        What investment income does the VIA platform provide?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapsefive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfive">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingsix">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapsesix" aria-expanded="false" aria-controls="collapseTwo">
                        What is the minimum investment amount I can use to get started?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapsesix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingsix">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingseven">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseseven" aria-expanded="false" aria-controls="collapseTwo">
                        What are VTU units?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapseseven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingseven">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingeight">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseeight" aria-expanded="false" aria-controls="collapseTwo">
                        What investment income does the VIA platform provide?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapseeight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeight">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingnine">
                    <h4 className="panel-title">
                      <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapsenine" aria-expanded="false" aria-controls="collapseTwo">
                        What is the minimum investment amount I can use to get started?
                              </Link>
                    </h4>
                  </div>
                  <div id="collapsenine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingnine">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit.
                              </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="menu1" className="tab-pane fade">
            <p>fdsfsdfaSD</p>
          </div>
          <div id="menu2" className="tab-pane fade">
            <p>dfsdfdsg</p>
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

export default Faq;