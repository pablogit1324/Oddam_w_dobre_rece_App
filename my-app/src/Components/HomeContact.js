import React from "react";
import "../scss/home_contact.scss";

function HomeContact() {
    return (
        <section id="HomeContact" className="contact">
            <div className="contact__background"></div>
            <div className="contact__container">
                <div className="contact__text">
                    <h2 className="contact__text_heading">Skontaktuj się z nami</h2>
                    <div className="decoration"></div>
                </div>
                <div className="contact__form">
                    <form>
                        <div className="contact__form__names">
                            <div className="contact__form__name">
                                <label className="contact__form__label">Wpisz swoje imię</label>
                                <input className="contact__form__input" type="text" placeholder="Krzysztof"/>
                            </div>
                            <div className="contact__form__email">
                                <label className="contact__form__label">Wpisz swoj email</label>
                                <input className="contact__form__input" type="text" placeholder="abc@xyz.pl"/>
                            </div>

                        </div>
                        <div className="contact__form__message">
                            <label className="contact__form__label">Wpisz swoją wiadomość</label>
                            <textarea className="contact__form__textarea"  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea>
                        </div>
                        <div className="contact__form__button">
                            <button className="contact__form__button__btn">Wyślij</button>
                        </div>

                    </form>
                </div>
                <span className="contact__copyright">Copyright by Coders Lab</span>
            </div>
        </section>
    )
}

export default HomeContact;