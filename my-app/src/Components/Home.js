import React from "react";
import "../scss/Home.scss";
import HomeHeader from './/HomeHeader';
import HomeColumns from './/HomeColumns';
import HomeAboutUs from './/HomeAboutUs';
import HomeWhoWeHelp from './/HomeWhoWeHelp';
import HomeContact from './/HomeContact';


function Home() {
    return (
        <>
            <HomeHeader/>
            <HomeColumns/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </>
    )
}

export default Home;