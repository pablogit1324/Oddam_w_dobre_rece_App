import React from "react";
import "../scss/home_about_us.scss"



function HomeAboutUs() {
    return (
        <section id="HomeAboutUs" className="about_us container">
            <div className="about_us__left_box">
                <h2 className="about_us__heading_text">O nas</h2>
                <div className="about_us__decoration"></div>
                <p className="about_us__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="about_us__signature"></div>
            </div>
            <div className="about_us__right_box"></div>
        </section>
    )

}

export default HomeAboutUs;