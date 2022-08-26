/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { StyledMain } from './styles'
import { ButtonTemplate } from '../ButtonTemplate'
import { getShortenenUrl } from '../../services'

export const Main = () => {
    const [urlData, setUrlData] = useState([{ err: '' }, []])

    const handleShortenUrlClick = async event => {
        event.preventDefault()
        const url = event.target.url.value
        const resetInput = event.target.url
        const shortenUrl = await getShortenenUrl(url)
        const shortenUrlJSON = await shortenUrl.json()

        if (shortenUrlJSON.ok) {
            const newUrl = {
                original: url,
                shorten: shortenUrlJSON.result.full_short_link2,
            }
            setUrlData(prevUrlData => {
                const infoUrl = { err: '' }
                const updatedUrlData = [...prevUrlData[1], newUrl]
                return [infoUrl, updatedUrlData]
            })
            resetInput.value = ''
        } else {
            setUrlData(prevUrlData => {
                const infoUrl = { err: shortenUrlJSON.error }
                const updatedUrlData = [...prevUrlData[1]]
                return [infoUrl, updatedUrlData]
            })
        }
    }
    return (
        <StyledMain
            aria-label="form Shortener"
            aria-level="1"
            errorVisibility={urlData[0].length !== 0}
        >
            {console.log(urlData)}
            <section className="form__input">
                <form onSubmit={handleShortenUrlClick}>
                    <div>
                        <input
                            id="url"
                            type="text"
                            placeholder="Shorten a link here..."
                        />

                        <small>{urlData[0].err}</small>
                    </div>
                    <ButtonTemplate>
                        <button type="submit">Shorten It!</button>
                    </ButtonTemplate>
                </form>
            </section>
            {urlData[1].length !== 0 &&
                urlData[1].map((url, i) => (
                    <section className="form__result" key={i}>
                        <div className="result__url">
                            <p>{url.original}</p>
                        </div>
                        <hr />
                        <div className="result__btn-url">
                            <p>{url.shorten}</p>
                            <ButtonTemplate>
                                <button type="button">Copy</button>
                            </ButtonTemplate>
                        </div>
                    </section>
                ))}
        </StyledMain>
    )
}
