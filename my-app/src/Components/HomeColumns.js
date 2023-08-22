import React from "react";
import "../scss/home_columns.scss"

function HomeColumns() {
    return (
        <>
        <section id="HomeColumns" className="columns">
            <div className="columns__column">
                <div className="columnfirst">
                    <h2 className="columnfirst__title">10</h2>
                    <h3 className="columnfirst__subtitle">ODDANYCH WORKÓW</h3>
                    <p className="columnfirst__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>

                <div className="columnsecond">
                    <h2 className="columnsecond__title">5</h2>
                    <h3 className="columnsecond__subtitle">WSPARTYCH ORGANIZACJI</h3>
                    <p className="columnsecond__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="columnthird">
                    <h2 className="columnthird__title">7</h2>
                    <h3 className="columnthird__subtitle">ZORGANIZOWANYCH ZBIÓREK</h3>
                    <p className="columnthird__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section>
            <section className="stepcolumn container">
                <h3 className="hedaing_steps_text">Wystarczą 4 proste kroki</h3>
                <div className="steps_img"></div>
                <div className="steps">
                    <div className="steps__firststep">
                        <div className="steps__firststep__img"></div>
                        <h3 className="steps__firststep__title">Wybierz rzeczy</h3>
                        <p className="steps__firststep__text">ubrania, zabawki,<br/> sprzęt i inne</p>
                    </div>
                    <div className="steps__secondstep">
                        <div className="steps__secondstep__img"></div>
                        <h3 className="steps__secondstep__title">Spakuj je</h3>
                        <p className="steps__secondstep__text">skorzystaj z<br/> worków na śmieci</p>
                    </div>
                    <div className="steps__thirdstep">
                        <div className="steps__thirdstep__img"></div>
                        <h3 className="steps__thirdstep__title">Zdecyduj komu<br/> chcesz pomóc</h3>
                        <p className="steps__thirdstep__text">wybierz zaufane<br/> miejsce</p>
                    </div>
                    <div className="steps__fourthstep">
                        <div className="steps__fourthstep__img"></div>
                        <h3 className="steps__fourthstep__title">Zamów kuriera</h3>
                        <p className="steps__fourthstep__text">kurier przyjedzie<br/> w dogodnym terminie</p>
                    </div>
                </div>
                <div className="steps__button">
                    <button className="steps__button__text">ODDAJ <br></br> RZECZY</button>
                </div>
            </section>



            </>
    )
}

export default HomeColumns;