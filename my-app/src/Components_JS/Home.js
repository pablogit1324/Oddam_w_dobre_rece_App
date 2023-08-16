import React from "react";
import "../scss/Home.scss";
import HomeHeader from '../Components_JS/HomeHeader';
import HomeColumns from '../Components_JS/HomeColumns';
import HomeAboutUs from '../Components_JS/HomeAboutUs';
import HomeWhoWeHelp from '../Components_JS/HomeWhoWeHelp';
import HomeContact from '../Components_JS/HomeContact';


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