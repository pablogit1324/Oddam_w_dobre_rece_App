import React from "react";
import "../scss/Home.scss";


function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="home__container">
                    <div className="home__container__text">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <div className="home__container__text__decoration"></div>
                        <div className="home__container__text__buttons">
                            <button className="home__container__text__buttons__button">ODDAJ RZECZY</button>
                            <button className="home__container__text__buttons__button">ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;