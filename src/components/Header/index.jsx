/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { useSelector } from 'react-redux'
import { BiMenu } from 'react-icons/bi'
import { StyledHeader } from './styles'
import { SvgLogo, SvgWorking } from '../Svg'
import { ButtonTemplate } from '../ButtonTemplate'

export const Header = () => {
    // const stateApp = useSelector(state => state.app)
    return (
        <StyledHeader aria-label="Header" aria-level="1">
            <section className="header__logomenu">
                <div className="header__logo">
                    <SvgLogo />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <hr />
                        <li>Login</li>
                        <li>
                            <ButtonTemplate>
                                <button type="button">Sign Up</button>
                            </ButtonTemplate>
                        </li>
                    </ul>
                </nav>
                <div className="header__menu">
                    <button type="button">
                        <BiMenu />
                    </button>
                </div>
            </section>
            <section className="header__img">
                <SvgWorking />
            </section>
            <section className="header__content">
                <h1>More than just shorter links</h1>
                <p>
                    Build your band´s recognition and get detailed insights on
                    how your links are performing
                </p>
                <ButtonTemplate>
                    <button type="button">Get Started</button>
                </ButtonTemplate>
            </section>
        </StyledHeader>
    )
}
