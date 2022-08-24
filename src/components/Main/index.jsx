import React from 'react'
import { StyledMain } from './styles'
import { ButtonTemplate } from '../ButtonTemplate'

export const Main = () => {
    return (
        <StyledMain aria-label="form Shortener" aria-level="1">
            <section className="form__input">
                <form onSubmit={event => event.preventDefault()}>
                    <input type="text" placeholder="Shorten a link here..." />
                    <small>Please add a link</small>
                    <ButtonTemplate>
                        <button type="submit">Shorten It!</button>
                    </ButtonTemplate>
                </form>
            </section>
            <section className="form__result">
                <div className="result__url">
                    <p>https://www.google.com</p>
                </div>
                <hr />
                <div>
                    <p>https://rel.ink/uckel</p>
                    <ButtonTemplate>
                        <button type="button">Copy</button>
                    </ButtonTemplate>
                </div>
            </section>
        </StyledMain>
    )
}
