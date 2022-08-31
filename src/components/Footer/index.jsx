import React from 'react'
import { StyledFooter } from './styles'
import { ButtonTemplate } from '../ButtonTemplate'
import recognition from '../../images/icon-brand-recognition.svg'
import record from '../../images/icon-detailed-records.svg'
import customizable from '../../images/icon-fully-customizable.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'

export const Footer = () => {
    return (
        <StyledFooter aria-label="Footer">
            <section className="footer__presentation" aria-label="presentation">
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard
                </p>
            </section>
            <section className="footer__cards" aria-label="Cards">
                <section aria-label="card Brand Recognition">
                    <section className="footer__cards-header">
                        <img src={recognition} alt="brand recognition" />
                    </section>
                    <section className="footer__card-main">
                        <h3>Brand Recognition</h3>
                        <p>
                            Boost your brand recognition with each click.
                            Generic links don´t mean a thing. Branded links help
                            instil confidence in your content.
                        </p>
                    </section>
                </section>
                <section aria-label="Card Detailed Records">
                    <section className="footer__cards-header">
                        <img src={record} alt="Detailed Records" />
                    </section>
                    <section className="footer__card-main">
                        <h3>Detailed Records</h3>
                        <p>
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your
                            content helps inform better decisions.
                        </p>
                    </section>
                </section>
                <section aria-label="Card Fully Customizable">
                    <section className="footer__cards-header">
                        <img src={customizable} alt="fully customizable" />
                    </section>
                    <section className="footer__card-main">
                        <h3>Fully Customizable</h3>
                        <p>
                            Improve brand awareness and content discoverability
                            through customizable links. supercharging audience
                            engagement.
                        </p>
                    </section>
                </section>
            </section>
            <section
                className="footer__boost"
                aria-label="boost your links today"
            >
                <div>
                    <h2>Boost your links today</h2>
                    <ButtonTemplate>
                        <button type="button">Get started</button>
                    </ButtonTemplate>
                </div>
            </section>
            <section
                className="footer__links"
                aria-label="features, resources, company, social"
            >
                <section className="footer__links-header">
                    <h2>shortly</h2>
                </section>
                <section className="footer__link_main">
                    <section className="footer__links-section">
                        <div>
                            <h3>Features</h3>
                        </div>
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </section>
                    <section className="footer__links-section">
                        <div>
                            <h3>Resources</h3>
                        </div>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </section>
                    <section className="footer__links-section">
                        <div>
                            <h3>Company</h3>
                        </div>
                        <p>About</p>
                        <p>Our team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </section>
                </section>
                <section className="footer__social">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                    <img src={instagram} alt="instagram" />
                </section>
            </section>
        </StyledFooter>
    )
}
