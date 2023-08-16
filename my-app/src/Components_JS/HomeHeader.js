import React from "react";
import {Link} from "react-router-dom";
import "../scss/home_header.scss";

function HomeHeader() {
    return (

        <section className="header container">
            <div className="header_img"></div>
            <div className="header_nav">
                <div className="header_nav_login">
                    <Link to={'/login'} className='header_nav_login_li'>Zaloguj</Link>
                    <Link to={'register'} className='header_nav_login_li border_yellow_link'>Załóż konto</Link>
                </div>
                <div className="header_nav_menu">
                    <Link to={'/login'} className='header_nav_login_link border_dark_link'>Start</Link>
                    <Link to={'/login'} className='header_nav_login_link'>O co chodzi?</Link>
                    <Link to={'/login'} className='header_nav_login_link'>O nas</Link>
                    <Link to={'/login'} className='header_nav_login_link'>Fundacja i organizacje</Link>
                    <Link to={'/login'} className='header_nav_login_link'>Kontakt</Link>

                </div>
                <div className="header_nav_description">
                    <h1 className='header_nav_description_h1'>Zacznij pomagać!
                        <br/><br/>
                        <span className='header_nav_description_span'>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </h1>
                    <div className='header_nav_description_img'/>
                    <div className='header_nav_description_button'>
                        <Link to={'/login'} className='header_nav_description_button_link'>ODDAJ RZECZY</Link>
                        <Link to={'/login'} className='header_nav_description_button_link'>ZORGANIZUJ ZBIÓRKĘ</Link>
                    </div>
                </div>
            </div>


        </section>


    );
}

export default HomeHeader;