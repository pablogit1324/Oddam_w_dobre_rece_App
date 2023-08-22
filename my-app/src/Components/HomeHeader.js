import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "../scss/home_header.scss";
import "../scss/main.scss";


function HomeHeader() {
    return (
        <section id="HomeHeader" className="header container">
            <div className="header_img"></div>
            <div className="header_nav">
                <div className="header_nav_login">
                    <Link to={'/logowanie'} className='header_nav_login_li'>Zaloguj</Link>
                    <Link to={'rejestracja'} className='header_nav_login_li border_yellow_link'>Załóż konto</Link>
                </div>

                <div className={`header_nav_menu`}>
                    <ScrollLink to="HomeHeader" className="header_nav_login_link border_dark_link">
                        Start
                    </ScrollLink>
                    <ScrollLink
                        className="header_nav_login_link"
                        to="HomeColumns"
                        smooth={true}
                        duration={500}
                    >
                        O co chodzi?
                    </ScrollLink>
                    <ScrollLink
                        className="header_nav_login_link"
                        to="HomeAboutUs"
                        smooth={true}
                        duration={500}
                    >
                        O nas
                    </ScrollLink>
                    <ScrollLink
                        className="header_nav_login_link"
                        to="HomeWhoWeHelp"
                        smooth={true}
                        duration={500}
                    >
                        Fundacja i organizacje
                    </ScrollLink>
                    <ScrollLink
                        className="header_nav_login_link"
                        to="HomeContact"
                        smooth={true}
                        duration={500}
                    >
                        Kontakt
                    </ScrollLink>
                </div>
                <div className="header_nav_description">
                    <h1 className='header_nav_description_h1'>Zacznij pomagać!
                        <br/><br/>
                        <span className='header_nav_description_span'>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </h1>
                    <div className='header_nav_description_img'/>
                    <div className='header_nav_description_button'>
                        <Link to={'/login'} className='header_nav_description_button_link'><p
                            className='xdd'>ODDAJ <br/> RZECZY</p></Link>
                        <Link to={'/login'} className='header_nav_description_button_link'><p className='xdd'>ZORGANIZUJ
                            ZBIÓRKĘ</p></Link>
                    </div>
                </div>
            </div>


        </section>


    );
}

export default HomeHeader;