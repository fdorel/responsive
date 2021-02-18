import React from 'react';
import {Link} from "react-router";
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div className="App">
    	<header>

        <div className="header-top">
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <Link to="index.html"><img src="images/logo.png" alt="#" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            
														<ul className="top_icon">
																<li className="button_login"><Link to="#">Login</Link></li>
																<li> <Link to="#about">Signup</Link></li>
																<li className="mean-last">
																	<Link to="#"><img src="images/search_icon.png" alt="#" /></Link>
																</li>
														</ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="slider_section">
                <div className="banner_main">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 padding_left0">
                                <div className="menu-area">
                                <div className="limit-box">
                                    <nav className="main-menu">
                                        <ul className="menu-area-main">
                                            <li className="active"> <Link to="#game">Game</Link> </li>
                                            <li> <Link to="#software">Software</Link> </li>
                                            <li> <Link to="#about">About</Link></li>
                                            <li> <Link to="#testimonial">Testimonial</Link></li>
                                            <li> <Link to="#contact">Contact</Link></li>
                                           
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                                <div className="text-bg">
                                    <h1>amazing 3d game</h1>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</span>
                                    <Link to="#">download</Link>
                                </div>
                            </div>
                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                                <div className="text-img">
                                   <img src="images/img.png" alt="#"/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
        
           </section>
        </div>
    </header>

    <div id="games" className="our">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>Our Games</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 margin_bottom">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="two-box">
                                <img src="images/our-image1.jpg" alt="#" />
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">

                            <div className="Games">
                                <h3>Angry Birds</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                                <Link to="#">Free Download</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 margin_bottom">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="two-box">
                                <img src="images/our-image2.jpg" alt="#" />
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">

                            <div className="Games">
                                <h3>Sanke</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                                <Link to="#">Free Download</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="two-box">
                                <img src="images/our-image3.jpg" alt="#" />
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">

                            <div className="Games">
                                <h3>Cricket</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                                <Link to="#">Free Download</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="software" className="We_are">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>Software</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div className="box_bg">
                         <div className="box_bg_img">
                             <img src="images/soft.jpg"/>
                         </div>
                     </div>
                 </div>
                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 border_right">
                     <div className="box_text">
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                         <Link to="#">Read more</Link>
                     </div>
                 </div> 
            </div>
        </div>
    </div>

    <div id="about" className="about">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>About Our Game</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="about-box">
                        <img src="images/about.jpg" alt="#" />

                        <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim conseq</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="testimonial" className="testimonial">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>Testimonial</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 offset-md-2">
                    <div className="row box">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <div className="testimonial_box">
                                <img src="images/test1.png" alt="#" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div className="testimonial_box">
                                <img src="images/test2.png" alt="#" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <div className="testimonial_box">
                                <img src="images/test3.png" alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="clients_box">
                        <h3>Jecoo</h3>
                        <p></p>

                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="contact" className="contact">
        <div className="container">

            <div className="row">

                <div className="col-md-12">

                    <form className="contact_bg">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input className="contactus" placeholder="Name" type="text" name="Name"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <input className="contactus" placeholder="Phone" type="text" name="Email"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <input className="contactus" placeholder="Email" type="text" name="Email"/>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <button className="send">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
				</div>
      </div>
    );
  }
}

export default App;
