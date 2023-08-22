import React from "react";
import "../scss/home_who_we_help.scss"

function HomeWhoWeHelp() {

    return (
        <div className="home_who_we_help" id="HomeWhoWeHelp">
            <div className="home_who_we_help__container">
                <h2 className="home_who_we_help__heading_text">Komu pomagamy?</h2>
                <div className="home_who_we_help__decoration"></div>
                <div className="home_who_we_help__buttons">
                    <button className="home_who_we_help__button">Fundacjom</button>
                    <button className="home_who_we_help__button">Organizacjom pozarządowym</button>
                    <button className="home_who_we_help__button">Lokalnym zbiórkom</button>
                </div>
                <div className="home_who_we_help__text">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
                <div className="home_who_we_help__list">
                    <div className="home_who_we_help__list__item">
                        <div className="home_who_we_help__list__item__title">
                            <h3 className="home_who_we_help__list__item__title_text">Fundacja "Dbam o Zdrowie"</h3>
                            <p className="home_who_we_help__list__item__title_text_secondary">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div className="home_who_we_help__list__item__things">
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="home_who_we_help__list__item">
                        <div className="home_who_we_help__list__item__title">
                            <h3 className="home_who_we_help__list__item__title_text">Fundacja "Dla dzieci"</h3>
                            <p className="home_who_we_help__list__item__title_text_secondary">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <div className="home_who_we_help__list__item__things">
                            <p>ubrania, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="home_who_we_help__list__item">
                        <div className="home_who_we_help__list__item__title">
                            <h3 className="home_who_we_help__list__item__title_text">Fundacja "Bez domu"</h3>
                            <p className="home_who_we_help__list__item__title_text_secondary">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div className="home_who_we_help__list__item__things">
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </div>
                </div>
                <div className="home_who_we_help__pagination">
                    <div className="home_who_we_help__pagination__item">
                        <button>1</button>
                    </div>
                    <div className="home_who_we_help__pagination__item">
                        <button>2</button>
                    </div>
                    <div className="home_who_we_help__pagination__item">
                        <button>3</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWhoWeHelp;