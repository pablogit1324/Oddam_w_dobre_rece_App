import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "../scss/home_header.scss";
import "../scss/main.scss";
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';


function HomeHeader() {
    const HomeColumnsData = document.getElementById('HomeColumnsData')
    const HomeColumns = <HomeColumnsData props={'HomeColumnsData'}/>;
    const HomeAbout = <HomeAboutUs props={'HomeAboutUs'}/>;
    const HomeWhoHelp = <HomeWhoWeHelp props={'HomeWhoWeHelp'}/>;
    const HomeContacts = <HomeContact props={'HomeContact'}/>;

    return (

        <section id="HomeHeader" className="header container">
            <div className="header_img"></div>
            <div className="header_nav">
                <div className="header_nav_login">
                    <Link to={'/logowanie'} className='header_nav_login_li'>Zaloguj</Link>
                    <Link to={'rejestracja'} className='header_nav_login_li border_yellow_link'>Załóż konto</Link>
                </div>
                <div className="header_nav_menu">
                    <ScrollLink to="HomeHeader" className="header_nav_login_link border_dark_link">
                        Start
                    </ScrollLink>
                    <ScrollLink to={HomeColumns} className="header_nav_login_link">
                        O co chodzi?
                    </ScrollLink>
                    <ScrollLink to={HomeAbout} className="header_nav_login_link">
                        O nas
                    </ScrollLink>
                    <ScrollLink to={HomeWhoHelp} className="header_nav_login_link">
                        Fundacja i organizacje
                    </ScrollLink>
                    <ScrollLink to={HomeContacts} className="header_nav_login_link">
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