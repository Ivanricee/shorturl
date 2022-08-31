/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { StyledHeader } from './styles'
import { SvgLogo, SvgWorking } from '../Svg'
import { ButtonTemplate } from '../ButtonTemplate'

export const Header = () => {
    const [open, setOpen] = useState(false)
    const handleDialog = () => {
        setOpen(prevState => !prevState)
    }
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1024px)')
        function handleDialogMQ() {
            if (mediaQuery.matches) {
                if (open) setOpen(false)
            }
        }
        mediaQuery.addListener(handleDialogMQ)

        return () => {
            mediaQuery.removeEventListener('change', handleDialogMQ)
        }
    }, [open])

    return (
        <StyledHeader aria-label="Header" isOpenDialog={open}>
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
                        <li>
                            <hr />
                        </li>
                        <li>Login</li>
                        <li>
                            <ButtonTemplate>
                                <button type="button">Sign Up</button>
                            </ButtonTemplate>
                        </li>
                    </ul>
                </nav>
                <div className="header__menu">
                    <button
                        type="button"
                        aria-label="principal menu"
                        onClick={handleDialog}
                    >
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
